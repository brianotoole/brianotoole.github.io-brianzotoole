---
layout: project
title: Did the Jags Win?
date: 2016-11-09
description: I'm a huge Jacksonville Jaguars fan and it's a tough life for us fans. It's been 8 years since the Jags have had a winning record. Since we never win, I thought it would be funny to spin up one of those joke websites, "Did Your Team Win?
img: project-didjagswin.jpg
link: http://didjagswin.com
---

I'm a huge Jacksonville Jaguars fan and it's a tough life for us fans. It's been 8 years since the Jags have had a winning record. Yeah, we suck! Anwyays, since we never win, I thought it would be funny to spin up one of those "Did Your Team Win?" websites, like [DidDukeWin](https://www.diddukewin.com/){:target="_blank"}. However, instead of needing to update it after each game, I wanted to find an API that tracks NFL scores in real-time, so team scores are automatically updated, without me needing to edit anything.

### Objectives
* Find & use NFL API to check scores weekly
* Create one-page site that pull in data from feed and shows if team won or lost
* This is just for fun

### Work Involved
Using the NFL Live API, I was able to get the latest score as a JSON feed, access the scores object and parse each team's scoring information for that particular week.

Since the data-set does not say which team is the winner, I needed to create a method to check whether or not the Jaguars were the Home or Away team and create a decision against possible scoring outcomes. 

I stored the Home/Away check as a boolean variable - `isHome` and tested it against the `teamName` (in this case, an object result with string value of: "Jaguars").

Then, set up how to determine a winner. Obviously, whichever team scores more points is the winner. So, I needed to have that for each outcome (Home and Away).

~~~
var winnerHome = (scoreHome > scoreAway);
//returns a boolean value (true or false)
~~~
Now, we can check against the possible scoring outcomes:

* If team **IS** home, and the home team **IS** the winner, the outcome is: "Won at home."
* If team **IS** home, and the home team **IS NOT** the winner, the outcome is: "Lost at home."
* If team **IS NOT** home, and the home team **IS** the winner, the outcome is: "Lost at away."
* If team **IS NOT** home, and the home team **IS NOT** the winner, the outcome is: "Won at away."

Taking it a step futher, I decided... why not do this for all the current teams that suck (Browns, Bucs, Dolphins). Since I'm using Jekyll as my parsing engine for the site, all it would take is to set global variables in the `_config.yml` file and change those variables to reflect the new team's site information. Then, add a menu toggle so the user can switch between sites. I purchased domains for each team and here's what we have:

![didjagswin homepage image](/assets/project-didjagswin-home.png)

![didjagswin homepage image](/assets/project-didjagswin-bucs.png)
> [View Site](http://didbucswin.com/){:target="_blank"}

![didjagswin homepage image](/assets/project-didjagswin-browns.png)
> [View Site](http://didbrownswin.com/){:target="_blank"}

![didjagswin homepage image](/assets/project-didjagswin-phins.png)
> [View Site](http://didphinswin.com/){:target="_blank"}