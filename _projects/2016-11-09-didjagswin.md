---
layout: project
title: Did the Jags Win?
date: 2016-11-09
description: I'm a huge Jacksonville Jaguars fan and it's a tough life for us fans. It's been 8 years since the Jags have had a winning record. Since we never win, I thought it would be funny to spin up one of those joke websites, "Did Your Team Win?
img: project-didjagswin.jpg
link: http://didjagswin.com
---

I'm a huge Jacksonville Jaguars fan and it's a tough life for us fans. It's been 8 years since the Jags have had a winning record. Since we never win, I thought it would be funny to spin up one of those joke websites, "Did Your Team Win?", like  [DidDukeWin](https://www.diddukewin.com/){:target="_blank"}. However, instead of needing to update it after each game, I wanted to use an NFL scoring API in real-time, so scoring outcomes are automatically updated, without me needing to edit anything.

### Objectives
* Find & use NFL API feed to check scores weekly
* Create one-page site that pull in data from feed and shows if team won or lost
* This is just for fun

### Work Involved
Using the NFL Live Update API, I was able to get the latest score as a JSON feed, access the scores object and parse each team's scoring information for that particular week.

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

That's all. Go Jags (I guess?!).

![didjagswin homepage image](/assets/project-didjagswin-home.png)