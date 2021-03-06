#!/bin/bash

# Build jekyll
# Easily purge all files in a Cloudflare cache.
# Pass zone, email, and key as options, or declare environment variables & a CNAME file to avoid it.
# This makes for a great post-receive hook for static sites that cache heavily on Cloudflare.

# build site
jekyll build

# purge CF cache
function exit_with_error_and_usage {
    if [ -n "$1" ]; then
        echo $1
        echo ""
    fi
    echo "  Usage:"
    echo "    purge-cf-cache [-s sitename] [-z zoneid] [-e cloudflare@email.com] [-k cloudflare_api_key]"
    echo ""
    echo "  Options:"
    echo "    -z     The Cloudflare zone. This is required if no site is found or defined."
    echo "    -s     Site name, eg mysite.com."
    echo "           This is not required if a zone is defined."
    echo "           Alternately, add a file called CNAME to your working directory with only the site name."
    echo "    -e     The email address associated with your Cloudflare account."
    echo "           You can optionally declare this as the environment variable CLOUDFLARE_EMAIL."
    echo "    -k     Your Cloudflare API key."
    echo "           You can optionally declare this as the environment variable CLOUDFLARE_API_KEY."
    echo ""
    echo "  Example usage:"
    echo "    purge-cf-cache -s mysite.com -e myemail@email.com -k apikey"
    echo ""
    exit
}

# Get variables
source env.txt
email=$CLOUDFLARE_EMAIL
key=$CLOUDFLARE_API_KEY

for ((i=1;i<=$#;i++)); 
do
    if [ ${!i} = "-s" ] 
    then ((i++)) 
        site=${!i};
    elif [ ${!i} = "-e" ];
    then ((i++)) 
        email=${!i};
    elif [ ${!i} = "-z" ];
    then ((i++)) 
        zone=${!i};
    elif [ ${!i} = "-k" ];
    then ((i++)) 
        key=${!i};
    elif [ ${!i} = "-h" ]; then
        exit_with_error_and_usage ""
    else
        exit_with_error_and_usage "Invalid option ${!i}"
    fi
done;

if [ -z $email ]; then
    exit_with_error_and_usage "Invalid email."
fi

if [ -z $key ]; then
    exit_with_error_and_usage "Invalid Cloudflare API key."
fi

echo -n "Purging "

if [ -z $zone ]; then
    if [ -z $site ] && [ -f CNAME ]; then
        site=$(cat CNAME)
    fi

    if [ -n $site ]; then
        echo "$site..."
        zone_response=$(\
            curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name=$site&status=active&page=1&per_page=20&order=status&direction=desc&match=all" \
            -H "X-Auth-Email: $email" \
            -H "X-Auth-Key: $key" \
            -H "Content-Type: application/json")

        #match for the ID of the first result. TODO make this work regardless of the location of id.
        #currently only works if it is the first key in the first result, eg "result":[{"id":"..."...}]
        success=$(echo $zone_response | sed -E 's/.*"success":([a-z]{4,5}),.*/\1/g')
        zone=$(echo $zone_response | sed -E 's/.*"result":\[\{"id":"([a-z0-9]+)".*/\1/g')
        if [ $success != 'true' ] || [ "$zone" == "$zone_response" ]; then
            echo "error fetching zone $zone: $zone_response"
            exit
        fi
    fi
else
    echo "zone $zone..."
fi

if [ -z "$zone" ]; then
    exit_with_error_and_usage "Invalid Cloudflare zone"
fi

purge=$(curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/$zone/purge_cache" \
-H "X-Auth-Email: $email" \
-H "X-Auth-Key: $key" \
-H "Content-Type: application/json" \
--data '{"purge_everything":true}')

success=$(echo $purge | sed -E 's/.*"success":([a-z]{4,5}),.*/\1/g')
if [ $success == 'true' ]; then
    echo "Successfully purged cache for zone $zone"
else
    echo "Failed to purge cache or response not recognized. Response: $purge"
fi