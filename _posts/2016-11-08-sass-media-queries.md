---
layout: post
title: Element Queries in Sass
category: web
img: #
icon: lnr-code
description: Nesting media queries within the selector is much more easier to control for scalable css architecture.
---
In the past, writing css sucked! You needed to repeat yourself over and over, and eventually you ended up with a bloated sheet of repeated rules that was nearly impossible to mantain.

Thankfully, today (and since years ago), [Sass](http://sass-lang.com){:target="_blank"} has helped us take control of our css architecture. Sass allows you to use features such as variables, nesting, and inheritance in your css. Basically, it takes the bloat out of css and **enforces the *DRY Princle - Don't Repeat Yourself*.**

Among it's many cool features, one of the most useful features of Sass is the ability to nest selectors. This is extremely helpful for managing media queries in responsive design. I've found that nesting media queries within the selector is much more easier to control & scale, than in separate files.

### Nested Media Queries, aka - "Element Queries"
For example, if I'm writing a component, it might look something like this:
~~~~
.component-name {
  width: 100%;
  @media (min-width: $breakpoint-large) {
    width: 55%;
  }
}
~~~~

This would compile to the following CSS:
~~~~
.component-name {
  width: 100%;
}
  @media (min-width: $breakpoint-large) {
    .component-name {
      width: 55%;
    }
  }
~~~~

So, instead of separating media queries into partial files in your directory, I'd recommend adding them inline... within the element. We can call those "element queries" instead of media queries. It's much, much easier to manage these within the element instead of separate files. Especially, when you will be working on a site that evolves rapidly.

### Potential Issues
Some may think this will create bloat. However, if you are using a build tool, like Grunt, or minifying your assets, there's nothing to worry about. We're talking a few KBs in the grand scheme of things.

What I will concede; however, is that authorship style is down to the individual and it is a preference, rather than an issue. If this approach works for you, like it does for me, then give it a try.

> All in all, the beautiful thing is that Sass gives you the option to do it however you please. And if you have control, you have power.