import React from 'react';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * True if use radio styling.
   */
  radio?: boolean;

  /**
   * The style of the radio button selected state.
   */
  radioType?: 'default' | 'check';
}

/**
 * Represents a checkbox component.
 *
 * Base props (such as `checked`, `onChange`) are extended from base `<input />` component.
 */
export function Checkbox(props: CheckboxProps) {
  return <div />;
}
