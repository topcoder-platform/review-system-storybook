import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * True if display a multiline textarena
   */
  isMultiline?: boolean;

  /**
   * A placeholder (if no value) or a floating label (if has value)
   */
  label: string;
}

/**
 * Represents an input component.
 *
 * Base props (such as `value`, `onChange`) are extended from base `<input />` component.
 */
export function Input(props: InputProps) {
  return <div />;
}
