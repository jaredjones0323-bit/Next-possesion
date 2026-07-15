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
              background: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="38" height="27" viewBox="0 0 90 64" fill="none">
              <g stroke="white" strokeWidth="9">
                <line x1="8" y1="54" x2="8" y2="10" />
                <line x1="32" y1="54" x2="32" y2="10" />
                <line x1="8" y1="10" x2="32" y2="54" />
                <line x1="55" y1="54" x2="55" y2="10" />
              </g>
              <path
                d="M55,8 H77 A14,14 0 0 1 77,36 H55 Z M55,17 H68 A5,5 0 0 1 68,27 H55 Z"
                fillRule="evenodd"
                fill="white"
              />
              <polygon points="38,64 47,64 63,0 54,0" fill="#f96411" />
            </svg>
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
