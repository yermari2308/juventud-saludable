import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
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
          padding: 72,
          background:
            "linear-gradient(135deg, #fffaf0 0%, #ffffff 34%, #ffe08a 62%, #5b2ca0 100%)",
          color: "#17131f",
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 34,
            fontWeight: 800
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#17131f",
              color: "#ffc94a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            JS
          </div>
          Juventud Saludable
        </div>
        <div>
          <div
            style={{
              display: "inline-flex",
              borderRadius: 999,
              background: "rgba(242, 106, 46, 0.14)",
              color: "#c94b16",
              padding: "12px 22px",
              fontSize: 24,
              fontWeight: 800
            }}
          >
            Costa Rica
          </div>
          <h1
            style={{
              margin: "28px 0 0",
              maxWidth: 880,
              fontSize: 78,
              lineHeight: 0.95,
              letterSpacing: 0,
              fontWeight: 900
            }}
          >
            Bienestar, liderazgo e impacto joven.
          </h1>
        </div>
        <p style={{ margin: 0, maxWidth: 820, fontSize: 30, lineHeight: 1.35, color: "#42384e" }}>
          Una generación organizada por la salud integral y la participación ciudadana.
        </p>
      </div>
    ),
    size
  );
}
