import React from "react";

/**
 * MediaSlot — placeholder for a real photo or video (portrait, testimonial clip).
 * Subtle warm diagonal stripes + a mono caption telling the editor what belongs here.
 * Swap for a real <img>/<video> in production.
 */
export function MediaSlot({
  label = "Bild",
  ratio = "4 / 5",
  rounded = "lg",
  style = {},
  ...rest
}) {
  const radii = { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)", xl: "var(--radius-xl)", pill: "var(--radius-pill)", circle: "50%" };
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: "100%",
        borderRadius: radii[rounded] || radii.lg,
        background:
          "repeating-linear-gradient(135deg, var(--cream-200) 0 14px, var(--cream-100) 14px 28px)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.04em",
          color: "var(--ink-500)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          padding: "5px 11px",
          borderRadius: "var(--radius-pill)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
