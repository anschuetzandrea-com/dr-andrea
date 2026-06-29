import React from "react";

/**
 * TestimonialCard — a client story: name, short intro, pull-quote, optional media.
 * Mirrors the site's "Boris Bezend" / "Edgar Kretschmann" sections, rebranded:
 * names in clay, quote in warm serif italic.
 */
export function TestimonialCard({
  name,
  intro,
  quote,
  media,
  align = "left",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: align === "right" ? "row-reverse" : "row",
        gap: 28,
        alignItems: "center",
        ...style,
      }}
      {...rest}
    >
      {media && <div style={{ flex: "0 0 42%", maxWidth: 360 }}>{media}</div>}
      <div style={{ flex: 1 }}>
        {name && (
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-h3)",
              color: "var(--clay-600)",
              margin: "0 0 8px",
            }}
          >
            {name}
          </h3>
        )}
        {intro && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-body)",
              lineHeight: "var(--lh-normal)",
              color: "var(--text-secondary)",
              margin: "0 0 16px",
            }}
          >
            {intro}
          </p>
        )}
        {quote && (
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "var(--fs-h4)",
              lineHeight: "var(--lh-snug)",
              color: "var(--ink-700)",
              margin: 0,
              paddingLeft: 18,
              borderLeft: "2px solid var(--sage-500)",
            }}
          >
            {quote}
          </blockquote>
        )}
      </div>
    </div>
  );
}
