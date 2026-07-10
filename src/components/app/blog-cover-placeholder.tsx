const rand = (seed: number) => {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
};

const BOKEH_COLORS = ["#8fa4ff", "#c9a6ff", "#ffffff", "#7dc3ff"] as const;

export default function BlogCoverPlaceholder({ index = 0 }: { index?: number }) {
  const id = `bcp${index}`;

  const bokeh = Array.from({ length: 20 }, (_, i) => ({
    cx: +(rand(i * 1.1 + 1) * 1920).toFixed(1),
    cy: +(rand(i * 2.3 + 7) * 1080).toFixed(1),
    r: +(3 + rand(i * 3.7 + 13) * 15).toFixed(1),
    baseOp: +(0.18 + rand(i * 4.9 + 19) * 0.55).toFixed(2),
    color: BOKEH_COLORS[i % 4],
    dur: `${(3 + rand(i * 5.3 + 23) * 6).toFixed(1)}s`,
    begin: `${(rand(i * 2.3 + 7) * 5).toFixed(1)}s`,
  }));

  // Perspective grid converging to vanishing point
  const VX = 960, VY = 400, BY = 1200;
  const VERTS = 26, HORIZS = 18;

  const vertD = Array.from({ length: VERTS }, (_, i) => {
    const bx = (i / (VERTS - 1)) * 1920;
    return `M${VX},${VY}L${bx},${BY}`;
  }).join(" ");

  const horizD = Array.from({ length: HORIZS }, (_, i) => {
    const t = (i + 1) / HORIZS;
    const tExp = t * t; // exponential spacing simulates foreshortening
    const y = VY + (BY - VY) * tExp;
    const hw = (1920 / 2) * tExp;
    return `M${(VX - hw).toFixed(0)},${y.toFixed(0)}L${(VX + hw).toFixed(0)},${y.toFixed(0)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <defs>
        {/* Background */}
        <radialGradient id={`${id}bg`} cx="960" cy="486" r="1100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#171b34" />
          <stop offset="45%" stopColor="#0d0f1f" />
          <stop offset="100%" stopColor="#05060d" />
        </radialGradient>

        {/* Grid fade mask — transparent at top, opaque at bottom */}
        <linearGradient id={`${id}gml`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="38%" stopColor="black" stopOpacity="0.35" />
          <stop offset="100%" stopColor="black" stopOpacity="1" />
        </linearGradient>
        <mask id={`${id}mask`}>
          <rect width="1920" height="1080" fill={`url(#${id}gml)`} />
        </mask>

        {/* Center glow */}
        <radialGradient id={`${id}cg`} cx="960" cy="530" r="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8278ff" stopOpacity="0.35" />
          <stop offset="38%" stopColor="#5a46c8" stopOpacity="0.14" />
          <stop offset="70%" stopColor="#3c2896" stopOpacity="0" />
        </radialGradient>

        {/* Blue trail */}
        <linearGradient id={`${id}tb`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f6bff" stopOpacity="0" />
          <stop offset="40%" stopColor="#6f8bff" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#9fb4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4f6bff" stopOpacity="0" />
        </linearGradient>

        {/* Purple trail */}
        <linearGradient id={`${id}tp`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#a259ff" stopOpacity="0" />
          <stop offset="40%" stopColor="#b47bff" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#d3a6ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a259ff" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter for trails */}
        <filter id={`${id}gf`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bottom vignette */}
        <radialGradient id={`${id}vig`} cx="960" cy="1080" r="1100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#000" stopOpacity="0.65" />
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="1920" height="1080" fill={`url(#${id}bg)`} />

      {/* Perspective grid (animated drift) */}
      <g mask={`url(#${id}mask)`}>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -20,14; 0,0"
            keyTimes="0;0.5;1"
            keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
            calcMode="spline"
            dur="14s"
            repeatCount="indefinite"
          />
          <path d={vertD} stroke="rgba(124,140,255,0.25)" strokeWidth="1" fill="none" />
          <path d={horizD} stroke="rgba(124,140,255,0.20)" strokeWidth="1" fill="none" />
        </g>
      </g>

      {/* Center glow */}
      <ellipse cx="960" cy="530" rx="560" ry="500" fill={`url(#${id}cg)`} />

      {/* Horizon glow line */}
      <line
        x1="0" y1="400" x2="1920" y2="400"
        stroke="rgba(160,150,255,0.4)"
        strokeWidth="1.5"
      />

      {/* Light trails */}
      <path
        d="M -100,780 C 500,620 850,560 960,540 C 1070,520 1450,460 2020,300"
        stroke={`url(#${id}tb)`}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#${id}gf)`}
      />
      <path
        d="M 2020,760 C 1500,660 1100,590 960,555 C 820,520 420,420 -100,260"
        stroke={`url(#${id}tp)`}
        strokeWidth="2"
        fill="none"
        filter={`url(#${id}gf)`}
      />

      {/* Bokeh dots with twinkle */}
      {bokeh.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.color} opacity={d.baseOp}>
          <animate
            attributeName="opacity"
            values={`${d.baseOp};${+(d.baseOp * 0.25).toFixed(2)};${d.baseOp}`}
            dur={d.dur}
            begin={d.begin}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Bottom vignette */}
      <rect width="1920" height="1080" fill={`url(#${id}vig)`} />
    </svg>
  );
}
