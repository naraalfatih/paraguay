import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.title}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static, typographic share card (no network fetches at build time).
export default function OpengraphImage() {
  const rings = [260, 190, 120, 50];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0d110f",
          color: "#efe8da",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {rings.map((d) => (
          <div
            key={d}
            style={{
              position: "absolute",
              right: 150 - d / 2 + 60,
              top: 315 - d / 2,
              width: d,
              height: d,
              borderRadius: 9999,
              border: "2px solid rgba(216,166,87,0.55)",
            }}
          />
        ))}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", width: 760 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#d8a657" }}>
            An editorial guide
          </div>
          <div style={{ fontSize: 132, lineHeight: 1, marginTop: 18, letterSpacing: -3 }}>Paraguay</div>
          <div style={{ fontSize: 34, marginTop: 26, color: "#a8a092" }}>
            Land, culture, food, history &amp; travel in the heart of South America
          </div>
        </div>
      </div>
    ),
    size,
  );
}
