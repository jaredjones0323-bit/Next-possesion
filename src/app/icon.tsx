import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c11",
          borderRadius: 14,
        }}
      >
        <svg width="46" height="33" viewBox="0 0 90 64" fill="none">
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
    ),
    { ...size }
  );
}
