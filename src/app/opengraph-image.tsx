import { ImageResponse } from "next/og";
import { SITE } from "@/lib/utils";

export const runtime = "edge";
export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0b0c11 0%, #191b24 60%, #431006 130%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#f96411",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            NP
          </div>
          {SITE.name}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 40, maxWidth: 900, lineHeight: 1.1 }}>
          The Playbook for the Next Level.
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 24, color: "#b1b8c8", maxWidth: 800 }}>
          Honest recruiting advice for basketball players and families.
        </div>
      </div>
    ),
    { ...size }
  );
}
