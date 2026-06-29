import React from "react";

/**
 * StepItem — a single numbered step in a "how it works" list.
 * Replaces the site's chevron bullets with a calm sage number disc.
 */
export function StepItem({ number, title, children, style = {}, ...rest }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", ...style }} {...rest}>
      <div
        style={{
          flex: "0 0 auto",
          width: 38,
          height: 38,
          borderRadius: "var(--radius-pill)",
          background: "var(--sage-100)",
          color: "var(--sage-700)",
          border: "1px solid var(--sage-200)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        {number}
      </div>
      <div style={{ paddingTop: 2 }}>
        {title && (
          <h4
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "var(--fs-body-lg)",
              color: "var(--text-heading)",
              margin: "0 0 4px",
            }}
          >
            {title}
          </h4>
        )}
        {children && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-body)",
              lineHeight: "var(--lh-normal)",
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
