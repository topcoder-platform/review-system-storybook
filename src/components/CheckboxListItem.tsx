import React from 'react';
import { CheckboxProps } from './Checkbox';

interface CheckboxListItemProps extends CheckboxProps {
  /**
   * True if show dragging version (no checkbox).
   */
  isDragging?: boolean;
}

/**
 * Represents a variation of List Item component with a checkbox.
 *
 * All props (such as `checked`, `onChange`) are extended from `<Checkbox />` component.
 */
export function CheckboxListItem(props: CheckboxListItemProps) {
  return <div />;
}
