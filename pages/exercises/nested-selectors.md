---
layout: page
title: Nested Selectors
permalink: /nested-selectors/
---

In CSS, a simple selector might look like this:

```css
p {
  color: red;
}
```

That selector (`p`) would match all paragraphs on the page, and their text would all change to red.

Nested selectors allow us to target elements on the page only when they are nested inside other elements. Like so:

```css
nav a {
  font-weight: bold;
}
```

This selector (`nav a`) would match any link elements that are nested *inside* any `nav` elements. This example of code would make any of those links nested inside `nav` elements bold, while leaving alone any other links on the page, which aren't nested inside `nav` elements.

Check out the example below on Codepen to try this out for yourself:

### Nested Selectors <small>([on Codepen](http://codepen.io/nevan/pen/mtJjg))</small>

For more kinds of selectors, see the [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors). (Technically speaking, the type of selector we just looked at is a "descendant selector".)