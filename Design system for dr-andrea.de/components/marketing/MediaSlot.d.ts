import * as React from "react";

/** Striped placeholder for a real photo/video, with a mono caption. */
export interface MediaSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Caption describing what image belongs here. @default "Bild" */
  label?: string;
  /** CSS aspect-ratio. @default "4 / 5" */
  ratio?: string;
  /** @default "lg" */
  rounded?: "sm" | "md" | "lg" | "xl" | "pill" | "circle";
}

export declare function MediaSlot(props: MediaSlotProps): JSX.Element;
