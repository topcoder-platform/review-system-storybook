import React from 'react';

interface SectionTabProps {
  /**
   * The content.
   */
  children: React.ReactNode;
  /**
   * The title.
   */
  title: string;
  /**
   * True if content is expanded.
   */
  isExpanded: boolean;
  /**
   * Triggered when the expand icon is clicked.
   */
  onToggleExpand: () => void;
  /**
   * Triggered when the fullscreen icon is clicked.
   */
  onFullscreen: () => void;
  /**
   * Triggered when the close icon is clicked.
   */
  onClose: () => void;

  /**
   * The bar color.
   * @default black
   */
  color?: 'black' | 'blue';

  /**
   * The node appended to the right side.
   */
  right?: React.ReactNode;
}

/**
 * Represents a component.
 */
export function SectionTab(props: SectionTabProps) {
  return <div />;
}
