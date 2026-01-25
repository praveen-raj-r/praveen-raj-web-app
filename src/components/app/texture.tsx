const Texture = () => {
  return (
    <svg className="contrast-[0.3] brightness-[0.5] fixed top-0 left-0 -z-99 w-full h-[calc(200px+100vh)] opacity-25 pointer-events-none translate-y-0">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  );
};

export default Texture;
