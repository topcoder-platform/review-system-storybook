import React from 'react';

interface Option {
  text: string;
  value: any;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * The list of options.
   */
  options: Option[];

  /**
   * A placeholder (if no value) or a floating label (if has value)
   */
  label: string;
}

/**
 * Represents a select component.
 *
 * Base props (such as `value`, `onChange`) are extended from base `<select />` component.
 */
export function Select(props: SelectProps) {
  return <div />;
}
