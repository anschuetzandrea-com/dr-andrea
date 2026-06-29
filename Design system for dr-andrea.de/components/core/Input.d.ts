import * as React from "react";

/** Labelled single-line text input with calm sage focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces hint and turns the field red. */
  error?: string;
}

export declare function Input(props: InputProps): JSX.Element;
