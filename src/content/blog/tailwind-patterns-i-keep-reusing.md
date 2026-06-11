---
title: "Tailwind Patterns I Keep Reusing"
date: "2026-04-20"
category: "CSS"
excerpt: "After building dozens of components in Tailwind, a few patterns keep showing up. These are the ones I reach for first."
---

## The Gradient Border

CSS border with a gradient isn't straightforward, but this Tailwind pattern gets it done cleanly using a `before` pseudo-element:

```html
<div
  class="relative before:absolute before:-inset-px before:rounded-xl before:bg-linear-to-r before:from-purple-500 before:to-pink-500 before:-z-10"
>
  <div class="relative rounded-xl bg-black p-4">Content</div>
</div>
```

## Glassmorphism Card

```html
<div
  class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
></div>
```

This is in my muscle memory at this point. Works on any dark background.

## Responsive Grid That Collapses Gracefully

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
```

Simple, but I always come back to this instead of overcomplicating it.

## Text Clamping

```html
<p class="line-clamp-2">Long text that should truncate after two lines...</p>
```

`line-clamp-*` is one of my most-used utilities for card excerpts.

## The Inset Shadow Highlight

A subtle inner highlight that gives cards a glass-like quality:

```html
<div class="shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
```

This reads as "a 1px highlight at the top edge" — very subtle, very effective on dark UIs.

## Takeaway

Tailwind's power comes from composability. You rarely need anything exotic — the same 10-15 utilities cover most UI patterns if you understand how to combine them.
