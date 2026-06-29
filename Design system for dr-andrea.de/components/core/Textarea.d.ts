import * as React from "react";

/** Multiline text field matching Input styling. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default 5 */
  rows?: number;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
