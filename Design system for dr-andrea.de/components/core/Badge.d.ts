import * as React from "react";

/** Small pill chip for tags / categories / status. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "sage" */
  tone?: "sage" | "clay" | "neutral" | "solid";
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
