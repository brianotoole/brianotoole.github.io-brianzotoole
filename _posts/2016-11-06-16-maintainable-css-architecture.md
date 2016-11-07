---
layout: post
title: The Importance of a Maintainable CSS Architecture
category: web
img: blogsocial.jpg
icon: lnr-code
description: One of the few things in web/software that is constant, is change. Front-end developers working on large websites know the challenge of writing maintainable CSS. A maintainable codebase means that any developer with access can edit styles without worry that another element is negatively impacted by accident. 
---

One of the few things in web/software that is constant, is change. Front-end developers working on large websites know the challenge of writing maintainable CSS. 

### What does maintainable css architecture mean?
A maintainable codebase means that any developer with access can edit styles without worry that another element is negatively impacted by accident. When marketers get together and discuss the latest and greatest “redesign” for an existing project, css styles (among other files) will need to be adapted to the new design. Changing css is easy. Unintentional changes is what makes updating css hard. Having a sound structure in place means reducing the number of possible error sources. It requires a system of adaptability, so other developers can pick up the project and understand the logic workflow.


### Methodology
Amidst the constant effort to develop best practices, there are dozens of concepts and processes to maintain a css structure. From architecture methodologies like *OOCSS* to *SMACSS*, there is no *perfect* way to organize a project… it depends on your preferred workflow. Choosing a method is simply a way of thinking and approaching CSS development for your project. You should be flexible and choose an approach that fits with the project you are a part of.


### Organization
The most important concept for having a maintainable css codebase, is to create and document a file structure. This means, identifying how you will order your stylesheets and use selectors in your project. It is also important to have a plan for naming conventions of selectors. This is where a preprocessor, like [Sass](http://sass-lang.com){:target="_blank"}, helps out. Sass (my preferred preprocessor) allows you to use features such as variables, nesting, and inheritance in your css.


Assuming your project is already setup with Sass, the next step to defining your architecture is to create a table of contents for your project - `main.scss` or `style.scss`. Below is a simple starting point. This does not use any particular architecture approach, but it does define how items should be organized and what naming conventions will be applied project-wide.

### Example Sass file structure 
~~~~
// setup
@import “config”;
@import “mixins”;

// base
@import “normalize”;
@import “base”;

// layout
@import “layout”;
@import “sidebar”;

// site-specific layout
@import “page-home”;
@import “page-interior”;

// components
@import “grid”;
@import “buttons”;
@import “forms”;
@import “helpers”;
~~~~

##### Setup
* **Applies to:**  Define variables, mixins, functions, etc.

##### Base
* **Applies to:** Get all browsers on same page ([normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css){:target="_blank"} or [reset](http://meyerweb.com/eric/tools/css/reset/reset.css){:target="_blank"}) and define global styles for project
* **Example selectors:** *html, body, h1, p, a*

##### Layout
* **Applies to:** Major page structure and layout classes
* **Example selectors:**  *.container, .sidebar, .page-wrapper*

##### Components
* **Applies to:** Reusable page components
* **Example selectors:**  *.grid, .button, input*

> There is no perfect way to approach css architecture and organization. If you have a plan and are reinforcing your conventions throughout your project, you are on the path to becoming a happier developer!
