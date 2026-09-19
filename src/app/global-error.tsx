"use client";

/**
 * Last-resort boundary: replaces the whole document, so it cannot rely on the
 * app's fonts or stylesheet being present.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-IN">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#42372a",
          color: "#fbf9f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "34rem" }}>
          <p
            style={{
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontSize: "0.6875rem",
              color: "#c7b492",
            }}
          >
            AJ Corrosion Prevention Services
          </p>
          <h1 style={{ fontSize: "2rem", lineHeight: 1.15, margin: "1rem 0 0" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#bfb39d", lineHeight: 1.6, marginTop: "1rem" }}>
            Please reload the page. If the problem continues, call or WhatsApp us on
            +91 89611 74927.
          </p>
          {error.digest ? (
            <p style={{ color: "#bfb39d", fontSize: "0.75rem", marginTop: "0.75rem" }}>
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              background: "#847152",
              color: "#fff",
              border: 0,
              padding: "0.875rem 1.75rem",
              fontSize: "0.9375rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
