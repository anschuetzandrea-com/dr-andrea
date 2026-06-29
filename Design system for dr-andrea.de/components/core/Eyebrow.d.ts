import * as React from "react";

/** Small uppercase tracked label that sits above headings. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "clay" */
  tone?: "clay" | "sage" | "muted" | "onDark";
  children?: React.ReactNode;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
