import React from 'react';

interface ReviewListItemProps {
  /**
   * The icon display in the left.
   */
  icon: React.ReactNode;
  /**
   * The content.
   */
  children: React.ReactNode;
  /**
   * True if grayed out.
   */
  muted?: boolean;
  /**
   * Custom text to display in the right side.
   */
  appendText?: React.ReactNode;

  /**
   * True if display a dotted line to the next bottom item.
   */
  connectBottom?: boolean;
}

/**
 * Represents a variation of List Item component with an icon.
 */
export function IconListItem(props: ReviewListItemProps) {
  return <div />;
}
