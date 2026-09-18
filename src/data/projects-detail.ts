export type ProjectDetail = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  featured: boolean;
  year: string;
  role: string;
  stack: string;
  timeline: string;
  status: string;
  statusUrl?: string;
  heroImage?: string;
  heroCaption?: string;
  problem: string;
  whatBuilt: string;
  whatBuiltBullets: string[];
  whatChanged: string;
  screenshots: { caption: string; width: number; height: number; url?: string }[];
  builtWith: { name: string; icon: string }[];
  demoUrl?: string;
  githubUrl?: string;
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
};

const projects: ProjectDetail[] = [
  {
    slug: "hostr",
    title: "Hostr",
    tagline: "AI-powered event management, built solo",
    icon: "/projects/hostr.png",
    featured: true,
    year: "2025",
    role: "Design + build",
    stack: "Next · Convex · TS",
    timeline: "6 weeks, nights",
    status: "Live",
    statusUrl: "https://hostr.app",
    heroCaption: "Dashboard with live analytics",
    problem:
      "Small organisers run events across four tools: a form for signups, a spreadsheet for attendees, a chat thread for the team and nothing at all for the door. Nobody knows how the event is doing until it's over.",
    whatBuilt:
      "One surface for the whole lifecycle: AI-assisted event creation, a real-time attendance dashboard, QR check-in that works on a phone at the door, and role-based access for volunteers.",
    whatBuiltBullets: [
      "Live counters driven by Convex subscriptions — no polling, no refresh button",
      "Optimistic check-in so scanning still works on venue wifi",
      "One table component behind attendees, tickets and payouts",
    ],
    whatChanged:
      "The AI creation flow does too much in one step. I'd split it into a draft-then-refine loop, and move ticket pricing out of the create wizard entirely.",
    screenshots: [
      { caption: "QR check-in on mobile", width: 390, height: 844 },
      { caption: "Attendees table", width: 1200, height: 800 },
    ],
    builtWith: [
      { name: "Next.js", icon: "/tech-stack/nextjs.png" },
      { name: "TypeScript", icon: "/tech-stack/typescript.png" },
      { name: "React", icon: "/tech-stack/react.png" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwindcss.png" },
    ],
    next: { title: "Weatherly", slug: "weatherly" },
  },
  {
    slug: "weatherly",
    title: "Weatherly",
    tagline: "Minimal weather app with clean visual forecasts",
    icon: "/projects/weatherly.png",
    featured: true,
    year: "2025",
    role: "Design + build",
    stack: "React · TypeScript · OpenWeather API",
    timeline: "2 weeks",
    status: "Live",
    problem:
      "Most weather apps show too much data at once. Hourly bars, pressure charts, UV index — all fighting for attention when most users just want to know if they need an umbrella.",
    whatBuilt:
      "A single-screen weather app that shows what matters: current conditions, an hourly strip, and a 7-day outlook. Location search with autocomplete and a dark/light mode that switches based on time of day.",
    whatBuiltBullets: [
      "Debounced location search to keep API calls low",
      "Dynamic backgrounds that shift with weather conditions",
      "Saves last searched city across sessions via localStorage",
    ],
    whatChanged:
      "I'd add a comparison view so you can check two cities side by side. Useful for travel planning and I had the data already, just didn't scope it in time.",
    screenshots: [
      { caption: "Current conditions view", width: 390, height: 844 },
      { caption: "7-day forecast", width: 1200, height: 800 },
    ],
    builtWith: [
      { name: "React", icon: "/tech-stack/react.png" },
      { name: "TypeScript", icon: "/tech-stack/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwindcss.png" },
      { name: "JavaScript", icon: "/tech-stack/javascript.png" },
    ],
    prev: { title: "Hostr", slug: "hostr" },
    next: { title: "Inkbot", slug: "inkbot" },
  },
  {
    slug: "inkbot",
    title: "Inkbot",
    tagline: "Create, share and engage with AI-generated content",
    icon: "/projects/inkbot.png",
    featured: true,
    year: "2025",
    role: "Frontend",
    stack: "Next.js · TypeScript · Tailwind",
    timeline: "4 weeks",
    status: "Live",
    problem:
      "Creating content consistently is hard. Most people know what they want to say but get stuck at the blank page. Existing AI tools generate walls of text that still need hours of editing.",
    whatBuilt:
      "A content creation tool where you pick a tone, drop in a topic, and get ready-to-share posts for LinkedIn, Twitter and newsletters. Built a card-based editor so you can tweak individual sections without rewriting everything.",
    whatBuiltBullets: [
      "Card-based output editor with inline regeneration per section",
      "One-click copy in platform-specific formats",
      "History panel so nothing gets lost between sessions",
    ],
    whatChanged:
      "The tone selector needs more granularity. 'Professional' and 'Casual' are too broad — I'd replace them with example-driven presets so the output is more predictable.",
    screenshots: [
      { caption: "Content editor view", width: 1200, height: 800 },
      { caption: "Output card view", width: 390, height: 844 },
    ],
    builtWith: [
      { name: "Next.js", icon: "/tech-stack/nextjs.png" },
      { name: "TypeScript", icon: "/tech-stack/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwindcss.png" },
      { name: "React", icon: "/tech-stack/react.png" },
    ],
    prev: { title: "Weatherly", slug: "weatherly" },
    next: { title: "Live Board", slug: "live-board" },
  },
  {
    slug: "live-board",
    title: "Live Board",
    tagline: "Real-time collaborative Kanban for small teams",
    icon: "/projects/live-board.png",
    featured: true,
    year: "2026",
    role: "Design + build",
    stack: "Next.js · Supabase · Realtime",
    timeline: "3 weeks",
    status: "In progress",
    problem:
      "Most Kanban tools are built for project managers, not engineers. They're heavy, slow to load, and require too many clicks to move a task from one state to another.",
    whatBuilt:
      "A fast, keyboard-friendly Kanban board with real-time sync. Drag to reorder, press Enter to add a card, Escape to cancel. No modals, no sidebars — just the board.",
    whatBuiltBullets: [
      "Supabase Realtime subscriptions keep all clients in sync instantly",
      "Optimistic UI so drag-drop feels instant even on slow connections",
      "Keyboard-first interactions with full mouse fallback",
    ],
    whatChanged:
      "I want to add swimlanes for grouping by assignee. The current flat column view works for solo use but breaks down when a team has more than three people.",
    screenshots: [
      { caption: "Kanban board view", width: 1200, height: 800 },
      { caption: "Card detail on mobile", width: 390, height: 844 },
    ],
    builtWith: [
      { name: "Next.js", icon: "/tech-stack/nextjs.png" },
      { name: "TypeScript", icon: "/tech-stack/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwindcss.png" },
      { name: "React", icon: "/tech-stack/react.png" },
    ],
    prev: { title: "Inkbot", slug: "inkbot" },
  },
];

export default projects;
