import React from "react";

/** Badge — small status / category chip. */
export function Badge({ tone = "sage", children, style = {}, ...rest }) {
  const tones = {
    sage: { bg: "var(--sage-200)", fg: "var(--sage-700)" },
    clay: { bg: "var(--clay-200)", fg: "var(--clay-700)" },
    neutral: { bg: "var(--cream-200)", fg: "var(--ink-700)" },
    solid: { bg: "var(--sage-600)", fg: "var(--cream-50)" },
  };
  const t = tones[tone] || tones.sage;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        lineHeight: 1,
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
