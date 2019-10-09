import React from 'react';

interface PanelPlaceholderProps {
  /**
   * The icon to display.
   */
  icon: React.ReactNode;
  /**
   * The panel title (bolded).
   */
  title: string;
  /**
   * The description
   */
  description: string;

  /**
   * True if placeholder should take 100% height.
   */
  full?: boolean;
}

/**
 * Represents a Panel placeholder component.
 */
export function PanelPlaceholder(props: PanelPlaceholderProps) {
  return <div />;
}
