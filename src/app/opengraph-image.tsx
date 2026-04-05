import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "linear-gradient(140deg, rgb(12, 74, 110) 0%, rgb(2, 132, 199) 45%, rgb(22, 163, 74) 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Geist, Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: 1,
            opacity: 0.9,
          }}
        >
          GET MIGRATED
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "900px",
          }}
        >
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            Nepal to Australia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.3,
              opacity: 0.95,
            }}
          >
            Trusted corridor guidance with clarity and confidence at every step.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 500,
            opacity: 0.9,
          }}
        >
          get-migrated.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}