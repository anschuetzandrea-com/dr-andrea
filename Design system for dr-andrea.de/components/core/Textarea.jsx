import React from "react";

/** Textarea — multiline field matching Input's styling. */
export function Textarea({ label, hint, error, id, rows = 5, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `t-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--text-heading)" }}
        >
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          lineHeight: 1.5,
          color: "var(--text-primary)",
          background: "var(--surface-raised)",
          border: `1.5px solid ${error ? "var(--error)" : focus ? "var(--border-brand)" : "var(--border-subtle)"}`,
          borderRadius: "var(--radius-md)",
          padding: "12px 14px",
          outline: "none",
          resize: "vertical",
          boxShadow: focus ? "var(--ring)" : "none",
          transition: "var(--transition-fast)",
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: error ? "var(--error)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
