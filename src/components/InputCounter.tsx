import React from 'react';

interface InputCounterProps {
  /**
   * The input value.
   */
  value: number;
  /**
   * Triggered when the value is changed.
   */
  onChange: (value: number) => void;
}

/**
 * Represents an input counter component with + and - buttons.
 */
export function InputCounter(props: InputCounterProps) {
  return <div />;
}
