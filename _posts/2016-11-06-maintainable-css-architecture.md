---
layout: post
title: The Importance of a Maintainable CSS Architecture
category: web
img: blogsocial.jpg
icon: lnr-code
description: One of the few things in web/software that is constant, is change. Front-end developers working on large websites know the challenge of writing maintainable CSS. A maintainable codebase means that any developer with access can edit styles without worry that another element is negatively impacted by accident. 
---

One of the few things in web/software development that is constant, is change. Front-end developers working on large websites know the challenge of writing maintainable CSS. 

### What does maintainable css architecture mean?
A maintainable codebase means that new module styles can be added without worry that another elements may be negatively impacted by accident. When marketers get together and discuss the latest and greatest redesign for an existing project, css styles (among other files) will need to be adapted to the new design. 

> Changing css is easy. Unintentional changes is what makes updating css hard. 

Having a sound structure in place means reducing the number of possible error sources. It requires a system of adaptability, so other team members can pick up the project and understand its workflow.


### Methodology
Amidst the constant effort to develop best practices, there are dozens of concepts and processes to maintain a css structure. Methodologies like *OOCSS* to *SMACSS*, help define an architecture baseline, without being too opinonated on design. While there is no perfect way to organize a project, it is critical that you define your methodology and keep this consistent throughout your project. This decision should be flexible and choose an approach that fits with the project you are a part of.


### Organization
The most important concept for having a maintainable css codebase, is to create and document a file structure. This means, identifying how you will order your stylesheets and use selectors in your project. It is also important to have a plan for naming conventions of selectors. This is where a preprocessor, like [Sass](http://sass-lang.com){:target="_blank"}, helps out. Sass allows you to use features such as variables, nesting, and inheritance in your css.


### Frameworks
Using a framework (or boilerplate) is recommended, but choose one that does not make *design decisions* for you. I try to choose a framework that is relatively unopinionated about design, but still provides appropriate helpers that make frameworks essential to fast and accurate frontend work. For example, solutions for responsive design, grids, and common accessibility patterns. Through modular design and excellent documentation, a framework should make it easy for your developer to only use the parts you need, rather than including a hefty library. Some recommendations:

1. [Kraken](https://cferdinandi.github.io/kraken/){:target="_blank"}
2. [PureCSS](http://purecss.io/){:target="_blank"}

Both of these are extremely lightweight, mobile-first boilerplates. They are style-agnostic and include only essentials, with out-of-the-box Sass support.

### Setup
Assuming your project has Sass ready to go, the next step is to define your architecture baseline. Or, **a table of contents for your project**. This will be called `main.scss` or `style.scss`, where all css structure will be managed. Below is a simple starting point. This does not use any particular architecture approach, but it does define how items should be organized and what naming conventions will be applied project-wide.

### Example Sass file structure 
~~~~
// setup
@import “config”;
@import “mixins”;

// base
@import “normalize”;
@import “base”;

// components
@import “grid”;
@import “buttons”;
@import “forms”;

// layout
@import “layout”;
@import “sidebar”;

// site-specific layout
@import “page-home”;
@import “page-interior”;

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

### Measurements
Use a **relative sizing approach** for units - ems and percentages for everything, not pixels.

* In your base.scss file, set the `body` to `font-size: 100%`

##### Base font-size
The `body` should be a base font-size of 100%, which is 16px on browsers with default font settings. All other sizes are in ems. Changing the font-size on the body element will adjust the typographical scale for the entire site. This allows you to be able to adjust everything on your site by changing a single value. Increasing or decreasing the body's font-size percentage will adjust the entire site accordingly. This helps a ton with responsive design usability. 

*An example* - On larger screens (> 1280px), you would most likely want to increase all font-sizes of the website to make it more readable for large screens. Since we're using relative sizings, it's simple to do. Here's how:
~~~~
body {
  font-size: $font-size-default; //100% or 16px
  @media (min-width: $breakpoint-large) {
    font-size: $font-size-large; //125% or 1.25 x 16px = 20px
  }
}
~~~~


**The `body` should be the only element sized as a percentage. All other elements are sized using ems.**

##### All other elements
Everything scales relative to the base your base font-size. An easy way to convert ems, without needing a calculator each time, is to use a Sass mixin:
~~~
// Sass mixin to calculate ems from pixels
@function calc-em($px, $base: 16) {
	$px: strip-unit($px);
	$base: strip-unit($base);
	@if $px == 1 {
		@return 1px;
	}
	@return ($px / $base) * 1em;
} 
~~~~
**Usage:** `h1 { font-size: calc-em(48px); }`

### Naming conventions
* Name things clearly
* HTML elements should be in lowercase.
* Classes should be lowercase.
* Avoid camelCase
* Name modifiers with adjectives. Ex - ".is-active" or ".is-collapsed"
* Write semantically - Name its purpose, not its appearance. 

Example of writing semantically (purpose NOT appearance):~~~~
// BAD
.red {
  color: $color-red;
}
~~~~

~~~~
// GOOD
.warning {
  color: $color-warning;
}
~~~~

When naming variables in Sass, don't base the name on context. Example:
~~~~
// BAD
$light-blue: #18f;
$dark-blue: #383;
~~~~

~~~~
// GOOD
$primary: #18f;
$secondary: #383;
~~~~

### Styleguide
Now that you have an established approach for your project, the last step is to document it into a styleguide. The purpose of creating a CSS styleguide is to encourage consistent CSS (or preprocessor CSS code) project-wide. The styleguide should be treated as a guide — rules can be modified according to project needs.

### Takeaways
Here are the steps for creating a scalable css system:
* Choose a framework or boilerplate that is helps with responsive design patterns that work for your project, but doesn't make design decisions for you
* Organize your file structure into a *table of contents* that makes sense for you, using a preprocessor like Sass.
* Define your base font-size using a relative sizing approach
* Establish and reinforce semantic naming conventions
* Document your approach into a css styleguide

There is no perfect approach to css architecture. If you have a documented plan and are reinforcing your conventions throughout your project, you are on the path to becoming a happier developer. 
