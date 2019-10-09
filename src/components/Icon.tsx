import React from 'react';

interface IconProps {
  /**
   * The background color.
   */
  color: 'teal' | 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'yellow';
  /**
   * The icon content (recommended to use <svg> element).
   */
  children: React.ReactNode;

  /**
   * True if icon should be muted (grayed out);
   */
  muted?: boolean;
}

/**
 * Represents an icon component. It should be used as a base icon for all icons.
 */
export function Icon(props: IconProps) {
  return <div />;
}
