import * as React from "react";

/** Warm content container — flat cream by default, optional elevation and tones. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "flat" */
  elevation?: "flat" | "soft" | "raised";
  /** Surface tone. @default "card" */
  tone?: "card" | "raised" | "sage" | "clay" | "inverse";
  /** Inner padding in px. @default 24 */
  padding?: number;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
