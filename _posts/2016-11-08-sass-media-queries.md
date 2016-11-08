---
layout: post
title: How I Do Media Queries in Sass
category: web
img: blogsocial.jpg
icon: lnr-code
description: One of the few things in web/software that is constant, is change. Front-end developers working on large websites know the challenge of writing maintainable CSS. A maintainable codebase means that any developer with access can edit styles without worry that another element is negatively impacted by accident. 
---
In the past, writing css sucked! You needed to repeat yourself over and over, and eventually you ended up with a bloated sheet of repeated rules that was nearly impossible to read... let alone manage. 

Thankfully, today (and since years ago), [Sass](http://sass-lang.com){:target="_blank" has helped us take control of our css architecture. Sass allows you to use features such as variables, nesting, and inheritance in your css. Basically, it takes the bloat out of css and **enforces the *DRY Princle - Don't Repeat Yourself*.**

Among it's many cool features, one of the most useful features of Sass is the ability to nest selectors. This is extremely helpful for managing media queries in responsive design. I've found that nesting media queries within the selector is much more easier to control & scale, than in separate files.

### Nested Media Queries 
For example, if I'm writing a component, it might look something like this:
~~~~
.component-name {
  width: 100%;
 @media (min-width: $breakpoint-large) {
    width: 55%; //above breakpoint-large
  }
}
~~~~

This would compile to the following CSS:
~~~~
.component-name {
  width: 100%;
}
 @media (min-width: $breakpoint-large) {
    width: 55%; //above breakpoint-large
  }
}
~~~~

So, instead of separating media queries into partial files in your directory, I'd recommend adding them inline. It's much, much easier to manage. Especially, when you will be working on a site that evolves rapidly.

### Potential Issues
Some may think this may cause it to bloat your compiled file. However, if you are using a build tool, like Grunt, or minifying your assets, there's nothing to worry about. We're talking a few KBs in the grand scheme of things.

What I will concede; however, is that authorship style is down to the individual and it is a preference, rather than an issue. If this approach works for you, like it does for me, then give it a try.

> All in all, the beautiful thing is that Sass gives you the option to do it however you please. And if you have control, you have power.