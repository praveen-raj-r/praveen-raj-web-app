---
title: "Building My Portfolio with Next.js 15"
date: "2026-06-01"
category: "Web Dev"
excerpt: "I migrated my portfolio from Vite + React to Next.js 15 App Router. Here's what changed, what broke, and what I learned along the way."
---

## Why I Switched

My original portfolio was a Vite + React SPA. It worked fine, but I started thinking about writing blogs and improving SEO — two things Vite doesn't handle well out of the box. Next.js was the obvious move.

## What Changed

The migration involved more than swapping a bundler. The file-based routing in App Router meant restructuring the entire project:

- `src/pages/` became `src/views/` to avoid conflicts with Next.js's Pages Router detection
- Every interactive component needed a `"use client"` directive
- Environment variables changed from `VITE_*` to `NEXT_PUBLIC_*`

## The Hydration Problem

The biggest surprise was a flood of hydration warnings. Turns out they were caused by my browser's password manager injecting `fdprocessedid` attributes into form fields — not a bug in my code at all. The fix was adding `suppressHydrationWarning` to `<body>`.

## What I Gained

- **SEO**: Full server-side rendering and metadata control
- **Performance**: Bundle size dropped from 188KB to 177KB on the home route
- **Blog support**: I can now write MDX/Markdown files and have them render as real pages
- **Static + Dynamic**: Most of the site pre-renders at build time, while the contact form submits to a live API

## Takeaway

The migration took a weekend. The learning curve for App Router is real — especially understanding when to use Server vs Client Components — but the end result is a faster, more capable site.
