import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top right, rgb(14, 116, 144) 0%, rgb(6, 95, 70) 46%, rgb(17, 24, 39) 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Geist, Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, opacity: 0.9 }}>
          Get Migrated
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: "920px",
          }}
        >
          <div style={{ display: "flex", fontSize: 66, fontWeight: 800, lineHeight: 1.06 }}>
            Nepal to Australia
          </div>
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.3, opacity: 0.95 }}>
            Guidance designed for people who want a clear, trustworthy path forward.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, opacity: 0.85 }}>
          Built for confidence, not confusion.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}