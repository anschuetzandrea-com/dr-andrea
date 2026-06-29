import * as React from "react";

/** One numbered step in a process list (sage number disc + title + copy). */
export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step number or short label shown in the disc. */
  number?: React.ReactNode;
  /** Step heading. */
  title?: string;
  /** Step description. */
  children?: React.ReactNode;
}

export declare function StepItem(props: StepItemProps): JSX.Element;
