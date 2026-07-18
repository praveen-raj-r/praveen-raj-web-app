import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "Praveen Raj";
  const sub = searchParams.get("sub") ?? "Frontend Engineer · React · TypeScript · CSS";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, #171b34 0%, #0d0f1f 45%, #05060d 100%)",
          padding: "80px 90px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid lines (faint perspective effect) */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Vertical lines */}
          {Array.from({ length: 13 }, (_, i) => {
            const bx = (i / 12) * 1200;
            return (
              <line
                key={i}
                x1={600}
                y1={240}
                x2={bx}
                y2={630}
                stroke="rgba(124,140,255,0.18)"
                strokeWidth="1"
              />
            );
          })}
          {/* Horizontal lines */}
          {Array.from({ length: 7 }, (_, i) => {
            const t = (i + 1) / 7;
            const tExp = t * t;
            const y = 240 + (630 - 240) * tExp;
            const hw = 600 * tExp;
            return (
              <line
                key={i}
                x1={600 - hw}
                y1={y}
                x2={600 + hw}
                y2={y}
                stroke="rgba(124,140,255,0.14)"
                strokeWidth="1"
              />
            );
          })}
          {/* Horizon glow */}
          <line x1="0" y1="240" x2="1200" y2="240" stroke="rgba(160,150,255,0.3)" strokeWidth="1" />
          {/* Center glow */}
          <ellipse cx="600" cy="330" rx="340" ry="280" fill="rgba(130,120,255,0.12)" />
          {/* Blue trail */}
          <path
            d="M -60,490 C 300,390 520,350 600,340 C 680,330 900,290 1260,190"
            stroke="rgba(100,140,255,0.6)"
            strokeWidth="2"
            fill="none"
          />
          {/* Purple trail */}
          <path
            d="M 1260,480 C 940,415 700,375 600,358 C 500,340 260,265 -60,165"
            stroke="rgba(162,89,255,0.55)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Bottom vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "280px",
            background:
              "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0,0,0,0.65) 0%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            position: "relative",
            zIndex: 10,
            gap: "12px",
          }}
        >
          {/* Dot + name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            <span
              style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}
            >
              praveenraj.dev
            </span>
          </div>

          <div
            style={{
              fontSize: title === "Praveen Raj" ? 72 : 58,
              fontWeight: 300,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "-0.3px",
              marginTop: "4px",
            }}
          >
            {sub}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
