import React from "react";

/**
 * Button — the practice's primary call-to-action.
 * Rounded-pill by default (warm, inviting), flat fills, gentle hover lift.
 */
export function Button({
  variant = "primary",
  size = "md",
  pill = true,
  fullWidth = false,
  href,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: "8px 16px", fontSize: 14 },
    md: { padding: "12px 24px", fontSize: 16 },
    lg: { padding: "16px 32px", fontSize: 17 },
  };

  const palettes = {
    primary: {
      bg: "var(--brand-primary)",
      bgHover: "var(--brand-primary-hover)",
      bgPress: "var(--brand-primary-press)",
      color: "var(--text-on-brand)",
      border: "transparent",
    },
    accent: {
      bg: "var(--brand-accent)",
      bgHover: "var(--brand-accent-hover)",
      bgPress: "var(--clay-700)",
      color: "var(--text-on-brand)",
      border: "transparent",
    },
    secondary: {
      bg: "transparent",
      bgHover: "var(--sage-100)",
      bgPress: "var(--sage-200)",
      color: "var(--sage-700)",
      border: "var(--border-brand)",
    },
    ghost: {
      bg: "transparent",
      bgHover: "var(--cream-200)",
      bgPress: "var(--sand-300)",
      color: "var(--text-heading)",
      border: "transparent",
    },
  };

  const p = palettes[variant] || palettes.primary;
  const bg = active ? p.bgPress : hover ? p.bgHover : p.bg;

  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.005em",
    textDecoration: "none",
    cursor: "pointer",
    border: `1.5px solid ${p.border}`,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    background: bg,
    color: p.color,
    width: fullWidth ? "100%" : "auto",
    transform: active ? "translateY(1px)" : "translateY(0)",
    transition: "var(--transition)",
    ...sizes[size],
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  if (href) {
    return (
      <a href={href} style={styles} {...handlers} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button style={styles} {...handlers} {...rest}>
      {children}
    </button>
  );
}
