---
layout: page
title: Wendy Bite
permalink: /wendy/
---

Download the starter files below.

### Wendy Bite <small>([download]({{ site.baseurl }}/starters/wendy_bite.zip)) ([markup preview]({{ site.baseurl }}/projects/wendy_bite_markup/)) ([design preview]({{ site.baseurl }}/projects/wendy_bite/))</small>

I recommend starting with just the markup for the site, and then proceeding to the style. You'll need to make two HTML files, probably called `index.html` and `resume.html` for this project, since it has two pages. Both should link to the same stylesheet file, so that you can control the style for both in one place.

Design Notes
------------

Have a closer look at the [design preview]({{ site.baseurl }}/projects/wendy_bite/) above, and note the following:

### Colors in use on the page

* `#444444` - for the page background
* `#777777` - the border around the page
* `#999999` - for the thin rules separating the header and the footer of the page, and the border around the photo
* `#BBBBBB` - for the sub-headings on the Résumé page
* `#EEEEEE` - most of the type is off-white to keep the contrast low
* `#FFFFFF` - the main headings, as well as the job titles and schools, for added emphasis
* `#00CC99` - for the links

### Fonts in use

* `sans-serif` - most of the headings
* `Georgia, serif` - most of the body copy

### Hints

* **Try resizing your web browser** -- you'll notice that the page does not have a fixed width. So you probably should be setting an explicit width in pixels on anything on the page.
* **Notice the image** -- it's doing something interesting where the text is wrapping around it. Try out `float: right;`.
* **Think about structure and resuse** -- things that look the same and serve the same purpose should probably share the same markup so that you don't have to repeat yourself a bunch in the CSS.