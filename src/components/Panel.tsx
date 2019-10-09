import React from 'react';

interface PanelProps {
  /**
   * The content.
   */
  children: React.ReactNode;
  /**
   * The title.
   */
  title: React.ReactNode;
  /**
   * Triggered when clicking 'X' button in the header.
   * If not defined then 'X' button won't be displayed.
   */
  onClose?: () => void;

  /**
   * The size of the border and padding in header.
   * @default default
   */
  size?: 'default' | 'large';

  /**
   * True if background header color and border should be the same.
   */
  solid?: boolean;
}

/**
 * Represents a Panel component.
 */
export function Panel(props: PanelProps) {
  return <div />;
}
