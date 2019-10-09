import React from 'react';

interface DisplayValueProps {
  /**
   * The field label.
   */
  label: string;
  /**
   * If the value is string it will be displayed as text.
   * If the value is array it will be displayed as list.
   */
  value: string | string[];
}

/**
 * Represents a component.
 */
export function DisplayValue(props: DisplayValueProps) {
  return <div />;
}
