---
layout: project
title: Did the Jags Win?
date: 2016-11-09
description: I'm a huge Jacksonville Jaguars fan and it's tough. Here we are, yet again.... It's been 8 years the Jags have had a winning record or even been fun to watch, for that matter. Since we never win, I thought it would be funny to spin up one of those joke websites.
img: project-didjagswin.jpg
link: http://didjagswin.com
---

### Project Overview
I'm a huge Jacksonville Jaguars fan and it's tough. Here we are, yet again.... It's been 8 years the Jags have had a winning record or even been fun to watch, for that matter. Since we never win, I thought it would be funny to spin up one of those "Did the [insert team name] win?" joke websites. (See, DidDukeWin.com). Although, I figured to do it right, I'd need to create something that pulls from an external NFL scoring API in real-time, so I never have to update this again.

### Objectives
* Find & use live NFL API feed to check scores weekly, in real-time
* Create a quick site that pull in data from feed and shows if team won or lost
* This is just for fun

### Work Involved
Using the NFL Live Update API, I was able to get the latest score as a JSON feed, parse the score and create an object for each team's scoring information for the particular week.

Since the data-set does not provide which team is the winner, I needed to create a method to check whether or not the Jaguars were the Home or Away team. I stored the Home/Away check as a variable - `isHome`. 

The Home / Away scores were also stored as variables: 
~~~
var homeTeam = obj.hnn;
var awayTeam = obj.vnn;
~~~

And then compared to determine true/false:
~~~
var winnerHome = (scoreHome > scoreAway);
~~~

Now, we can check against the possible scoring outcomes:

* If team **IS** home, and the home team **IS** the winner, the outcome is: "Won at home."
* If team **IS** home, and the home team **IS NOT** the winner, the outcome is: "Lost at home."
* If team **IS NOT** home, and the home team **IS** the winner, the outcome is: "Lost at away."
* If team **IS NOT** home, and the home team **IS NOT** the winner, the outcome is: "Won at away."

As for the tools used to build the site - I am using Jekyll as my templating engine, Sass & Codekit, GH-Pages for hosting, and Cloudflare for DNS.

That's all. Go Jags? Man, I'd love to be able to say that more.


![didjagswin homepage image](/assets/project-didjagswin-home.png)