const techStacks = [
  // ===== Frameworks & Core Libraries (TOP IMPACT) =====
  {
    name: "React",
    link: "https://react.dev/",
    img: "/tech-stack/react.png",
    appBadge: "library",
    description:
      "Component-based UI library.\nEncourages reusable logic and declarative rendering.\nIndustry standard for frontend development.",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    img: "/tech-stack/nextjs.png",
    appBadge: "framework",
    description:
      "Production-ready React framework.\nSupports SSR, routing, and performance optimization.\nUsed for scalable full-stack apps.",
  },

  // ===== Core Languages =====
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/tech-stack/javascript.png",
    appBadge: "language",
    description:
      "Primary scripting language of the web.\nEnables dynamic interactions, logic, and browser APIs.\nDrives interactivity in modern applications.",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    img: "/tech-stack/typescript.png",
    appBadge: "language",
    description:
      "Statically typed superset of JavaScript.\nImproves code reliability, readability, and scalability.\nIdeal for large and maintainable applications.",
  },
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: "/tech-stack/html.png",
    appBadge: "language",
    description:
      "Core markup language for structuring web content.\nDefines semantic layout and accessibility.\nForms the foundation of every website.",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: "/tech-stack/css.png",
    appBadge: "language",
    description:
      "Stylesheet language for responsive layouts.\nControls visuals, spacing, and animations.\nEssential for polished UI design.",
  },

  // ===== State, Routing & Styling =====
  {
    name: "TanStack Query",
    link: "https://tanstack.com/query/latest",
    img: "/tech-stack/tanstack.png",
    appBadge: "library",
    description:
      "Data-fetching and caching library for React.\nManages server state efficiently.\nReduces boilerplate for API-driven apps.",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    img: "/tech-stack/redux.png",
    appBadge: "library",
    description:
      "Predictable state management solution.\nCentralizes complex application state.\nUseful for large-scale applications.",
  },
  {
    name: "React Router",
    link: "https://reactrouter.com/",
    img: "/tech-stack/react-router.jpeg",
    appBadge: "library",
    description:
      "Routing library for React applications.\nEnables client-side navigation and layouts.\nCore tool for multi-page SPAs.",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    img: "/tech-stack/tailwindcss.png",
    appBadge: "styling",
    description:
      "Utility-first CSS framework.\nSpeeds up UI development.\nEnsures design consistency.",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    img: "/tech-stack/bootstrap.jpeg",
    appBadge: "styling",
    description:
      "CSS framework for responsive design.\nProvides prebuilt components and grid system.\nUseful for rapid prototyping.",
  },

  // ===== Backend, Auth & Database (BIG PLUS) =====
  {
    name: "Supabase",
    link: "https://supabase.com/",
    img: "/tech-stack/supabase.png",
    appBadge: "backend",
    description:
      "Open-source backend-as-a-service platform.\nProvides Postgres database, auth, and storage.\nUsed for building full-stack applications quickly.",
  },
  {
    name: "Clerk",
    link: "https://clerk.com/",
    img: "/tech-stack/clerk.jpeg",
    appBadge: "auth",
    description:
      "Authentication and user management platform.\nHandles sign-in, sign-up, and sessions.\nUsed to secure modern web apps.",
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    img: "/tech-stack/prisma.png",
    appBadge: "orm",
    description:
      "Type-safe ORM for TypeScript.\nSimplifies database access and schema management.\nCommonly used with Postgres.",
  },
  {
    name: "Neon Postgres",
    link: "https://neon.com/",
    img: "/tech-stack/neon.png",
    appBadge: "database",
    description:
      "Serverless PostgreSQL database.\nDesigned for cloud-native scalability.\nUsed in modern full-stack apps.",
  },
  {
    name: "Convex",
    link: "https://www.convex.dev/",
    img: "/tech-stack/convex.png",
    appBadge: "backend",
    description:
      "Real-time backend-as-a-service.\nHandles data and server functions.\nUsed for event-driven applications.",
  },

  // ===== Developer Tools =====
  {
    name: "Git",
    link: "https://git-scm.com/",
    img: "/tech-stack/git.png",
    appBadge: "tool",
    description:
      "Version control system.\nTracks changes and enables collaboration.\nCore developer skill.",
  },
  {
    name: "Github",
    link: "https://github.com/",
    img: "/tech-stack/github.png",
    appBadge: "platform",
    description:
      "Code hosting and collaboration platform.\nManages repositories and pull requests.\nEssential for hiring evaluation.",
  },
  {
    name: "VS Code",
    link: "https://code.visualstudio.com/",
    img: "/tech-stack/vscode.png",
    appBadge: "coding",
    description:
      "Primary code editor for web developers.\nSupports extensions, debugging, and Git.\nDaily development environment.",
  },
  {
    name: "Visual Studio",
    link: "https://visualstudio.microsoft.com/",
    img: "/tech-stack/visual-studio.png",
    appBadge: "coding",
    description:
      "Full-featured IDE.\nUsed for enterprise and backend development.\nSupports advanced debugging.",
  },
  {
    name: "Vite",
    link: "https://vite.dev/",
    img: "/tech-stack/vite.jpg",
    appBadge: "tool",
    description:
      "Fast frontend build tool.\nImproves dev speed and HMR.\nModern alternative to older bundlers.",
  },
  {
    name: "Postman",
    link: "https://www.postman.com/",
    img: "/tech-stack/postman.png",
    appBadge: "tool",
    description:
      "API testing and debugging tool.\nValidates backend integrations.\nImportant for full-stack workflows.",
  },

  // ===== Deployment & Cloud =====
  {
    name: "Vercel",
    link: "https://vercel.com/",
    img: "/tech-stack/vercel.png",
    appBadge: "platform",
    description:
      "Frontend deployment platform.\nOptimized for Next.js apps.\nUsed for production hosting.",
  },
  {
    name: "Netlify",
    link: "https://www.netlify.com/",
    img: "/tech-stack/netlify.png",
    appBadge: "platform",
    description:
      "CI/CD and hosting for web apps.\nSupports serverless workflows.\nPopular in JAMstack.",
  },
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
    img: "/tech-stack/aws.png",
    appBadge: "cloud",
    description:
      "Cloud infrastructure platform.\nProvides scalable hosting and services.\nAdds backend credibility.",
  },

  // ===== Design =====
  {
    name: "Figma",
    link: "https://www.figma.com/",
    img: "/tech-stack/figma.png",
    appBadge: "design",
    description:
      "UI/UX design and prototyping tool.\nUsed for design handoff and systems.\nImportant for frontend collaboration.",
  },

  // ===== AI & Community (LOW IMPACT) =====
  {
    name: "Cursor",
    link: "https://cursor.com/",
    img: "/tech-stack/cursor.jpeg",
    appBadge: "ai-tool",
    description:
      "AI-powered code editor.\nImproves development speed.\nUsed as a productivity tool.",
  },
  {
    name: "ChatGPT",
    link: "https://chatgpt.com/",
    img: "/tech-stack/chatgpt.png",
    appBadge: "ai",
    description:
      "AI coding assistant.\nHelps with debugging and learning.\nBoosts productivity.",
  },
  {
    name: "Gemini",
    link: "https://gemini.google.com/app",
    img: "/tech-stack/gemini.png",
    appBadge: "ai",
    description:
      "Google AI assistant.\nSupports research and reasoning.\nUsed for ideation.",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/questions",
    img: "/tech-stack/stack-overflow.png",
    appBadge: "community",
    description:
      "Developer Q&A platform.\nHelps resolve bugs and edge cases.\nLearning resource.",
  },
];

export default techStacks;

export const badgeStyles: Record<string, string> = {
  // ===== Core =====
  language:
    "text-[#d30000b2] bg-[linear-gradient(90deg,#ffc4c4_0%,#ffe7e7_100%)]",

  framework:
    "text-[#0057d3b2] bg-[linear-gradient(90deg,#c4dbff_0%,#e7f0ff_100%)]",

  library: "text-[#6b21a8] bg-[linear-gradient(90deg,#e9d5ff_0%,#f5ebff_100%)]",

  styling: "text-[#0f766e] bg-[linear-gradient(90deg,#ccfbf1_0%,#ecfeff_100%)]",

  // ===== Dev Tools =====
  tool: "text-[#374151] bg-[linear-gradient(90deg,#e5e7eb_0%,#f9fafb_100%)]",

  coding: "text-[#1e40af] bg-[linear-gradient(90deg,#dbeafe_0%,#eff6ff_100%)]",

  // ===== Platforms & Backend =====
  platform:
    "text-[#111827] bg-[linear-gradient(90deg,#e5e7eb_0%,#ffffff_100%)]",

  backend: "text-[#064e3b] bg-[linear-gradient(90deg,#bbf7d0_0%,#ecfdf5_100%)]",

  database:
    "text-[#1e3a8a] bg-[linear-gradient(90deg,#bfdbfe_0%,#eff6ff_100%)]",

  orm: "text-[#312e81] bg-[linear-gradient(90deg,#c7d2fe_0%,#eef2ff_100%)]",

  cloud: "text-[#075985] bg-[linear-gradient(90deg,#bae6fd_0%,#e0f2fe_100%)]",

  auth: "text-[#7c2d12] bg-[linear-gradient(90deg,#fed7aa_0%,#fff7ed_100%)]",

  // ===== State / Data =====
  state: "text-[#4a044e] bg-[linear-gradient(90deg,#f5d0fe_0%,#fdf4ff_100%)]",

  // ===== Design & UX =====
  design: "text-[#be123c] bg-[linear-gradient(90deg,#fecdd3_0%,#fff1f2_100%)]",

  // ===== AI =====
  ai: "text-[#7c2d12] bg-[linear-gradient(90deg,#fed7aa_0%,#fff7ed_100%)]",

  "ai-tool":
    "text-[#78350f] bg-[linear-gradient(90deg,#fde68a_0%,#fffbeb_100%)]",

  // ===== Community / Misc =====
  community:
    "text-[#4c1d95] bg-[linear-gradient(90deg,#ddd6fe_0%,#f5f3ff_100%)]",

  productivity:
    "text-[#3f6212] bg-[linear-gradient(90deg,#d9f99d_0%,#f7fee7_100%)]",

  browser: "text-[#92400e] bg-[linear-gradient(90deg,#fde68a_0%,#fffbeb_100%)]",

  music: "text-[#065f46] bg-[linear-gradient(90deg,#bbf7d0_0%,#ecfdf5_100%)]",
};
