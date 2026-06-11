---
title: "React 19 Features I Use Every Day"
date: "2026-05-15"
category: "React"
excerpt: "React 19 shipped several changes that genuinely changed how I write components. Here are the ones that stuck."
---

## The `use` Hook

The new `use` hook lets you read a Promise or Context inside any component — including conditionally. This means you can defer data fetching to leaf components without lifting state up.

```jsx
const data = use(fetchSomething());
```

It pairs naturally with Suspense and makes data loading feel first-class.

## Server Components in the App Router

Server Components changed how I think about rendering. Most of my UI components are now server-side by default — they fetch their own data and render HTML. Only the interactive parts (forms, toggles, animations) need `"use client"`.

The mental model shift: **start on the server, push to the client only when you need interactivity.**

## `useOptimistic`

For any action that updates UI before the server confirms it, `useOptimistic` is the right tool. I use it for toggle buttons and like counts — the UI updates instantly, and if the request fails, it rolls back.

```jsx
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

## `useFormStatus`

This hook reads the status of a parent `<form>` — whether it's pending, what data was submitted. No need to pass `loading` props down to your submit button anymore.

## Takeaway

React 19 rewards a server-first mindset. The new primitives are designed around the idea that most rendering should happen close to the data, not in the browser.
