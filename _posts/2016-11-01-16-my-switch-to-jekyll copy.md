---
layout: post
title: My Switch to Jekyll
category: web
img: blogsocial.jpg
icon: lnr-code
---

When the term *"website redesign"* is used, most people tend to think of *creating a new look & feel of the interface* for a website. For me, I like to look at a redesign from the inside out. This means, taking a look at what currently exists and if all systems are working to maxium potential. **A redesign should be a full-stack decision... not just front-end**.

This month, I decided it was time for me to evaluate my own website. After looking at my objectives, I felt the switch from WordPress to Jekyll was necessary. We'll get into the *Good vs Bad* of Jekyll and Wordpress in another post, but for now... let's talk about my decision to switch my website to Jekyll.

### What is Jekyll?
[Jekyll](https://jekyllrb.com/docs/home){:target="_blank"} is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as "a simple, blog aware, static site generator". However, it is **not a blogging software**. It is **a parsing engine**. It does not come with any content and it does not have any templates or design elements (out of the box).

### Why Use It?

Every web developer will their have their own reasons for using Jekyll, but for me, it comes down to two main benefits...

1. language
2. speed

### Language

Jekyll uses *Liquid* as it's templating engine and combines that with *Markdown*, making it very minimalistic and very efficient for me. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and the Liquid renderer. Just like WordPress (or PHP), you can create templates to manage page layouts, use collections to manage post types, and use data variables to access data.

### Speed
The most important thing about Jekyll, is that it creates a static representation of the site, requiring only a static web-server. Wordpress (or other PHP-based CMSs) require a database and server-side (PHP, MySQL) code. High-traffic, dynamic sites must employ a caching layer that ultimately performs the same job Jekyll sets out to do - **serve static content**.

Oh, and another thing... beacause of this, you can host your site **for free** using GitHub Pages. 

> So, my decision to use Jekyll ultimately came down to it's efficient templating and unparalleled performance. If you like to keep things simple and you are comfortable with the command-line, give [Jekyll](https://jekyllrb.com/docs/home){:target="_blank"} a try for your personal site.
