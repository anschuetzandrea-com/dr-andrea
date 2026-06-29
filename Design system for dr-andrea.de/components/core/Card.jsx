import React from "react";

/**
 * Card — warm content container. Default is a flat cream surface with a hairline.
 * Use elevation="raised" for floating cards (white + soft shadow).
 */
export function Card({
  elevation = "flat",
  tone = "card",
  padding = 24,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    card: "var(--surface-card)",
    raised: "var(--surface-raised)",
    sage: "var(--surface-sage)",
    clay: "var(--surface-clay)",
    inverse: "var(--surface-inverse)",
  };
  const shadows = { flat: "none", raised: "var(--shadow-md)", soft: "var(--shadow-sm)" };
  const isInverse = tone === "inverse";

  return (
    <div
      style={{
        background: tones[tone] || tones.card,
        color: isInverse ? "var(--text-on-dark)" : "var(--text-primary)",
        border: elevation === "flat" ? "1px solid var(--border-subtle)" : "none",
        borderRadius: "var(--radius-lg)",
        boxShadow: shadows[elevation] || "none",
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
