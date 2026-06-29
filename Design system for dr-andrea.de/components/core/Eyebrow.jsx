import React from "react";

/** Eyebrow — small uppercase label above a heading. Clay by default. */
export function Eyebrow({ tone = "clay", children, style = {}, ...rest }) {
  const colors = {
    clay: "var(--clay-600)",
    sage: "var(--sage-700)",
    muted: "var(--text-muted)",
    onDark: "var(--clay-500)",
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: 600,
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: colors[tone] || colors.clay,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
