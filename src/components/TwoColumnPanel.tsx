import React from 'react';

interface TwoColumnPanelProps {
  /**
   * The title for the left column.
   */
  leftTitle: React.ReactNode;

  /**
   * The title for the right column.
   */
  rightTitle: React.ReactNode;

  /**
   * The size of the border and padding in header.
   * @default default
   */
  size?: 'default' | 'large';

  /**
   * True if background header color and border should be the same.
   */
  solid?: boolean;

  /**
   * The list of items to display.
   */
  items: Array<{ left: React.ReactNode; right: React.ReactNode }>;
}

/**
 * Represents a Panel component that has two column layout.
 *
 * NOTE: Panel should be reused, but without 'onClose` function.
 */
export function TwoColumnPanel(props: TwoColumnPanelProps) {
  return <div />;
}
