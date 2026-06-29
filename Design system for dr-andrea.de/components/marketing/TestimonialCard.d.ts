import * as React from "react";

/**
 * A client success story with name, intro, pull-quote, and optional media.
 *
 * @startingPoint section="Marketing" subtitle="Client testimonial with media + pull-quote" viewport="760x360"
 */
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Client name — rendered in clay serif. */
  name?: string;
  /** One- or two-line intro about the client. */
  intro?: string;
  /** The pull-quote — rendered in warm serif italic. */
  quote?: string;
  /** A MediaSlot, <img>, or <video> for the client's photo/clip. */
  media?: React.ReactNode;
  /** Side the media sits on. @default "left" */
  align?: "left" | "right";
}

export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
