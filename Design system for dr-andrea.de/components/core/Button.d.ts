import * as React from "react";

/**
 * Primary call-to-action button for the Dr. Andrea practice.
 *
 * @startingPoint section="Core" subtitle="Pill CTA in sage / clay / outline" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Fully-rounded pill shape. @default true */
  pill?: boolean;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
