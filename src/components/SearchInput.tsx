import React from 'react';

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * True if use bright version.
   */
  bright?: boolean;

  /**
   * The size
   */
  size?: 'default' | 'small';
}

/**
 * Represents a search input component.
 *
 * Base props (such as `value`, `onChange`) are extended from base `<input />` component.
 */
export function SearchInput(props: SearchInputProps) {
  return <div />;
}
