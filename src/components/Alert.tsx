import React from 'react';

interface AlertProps {
  /**
   * The alert style.
   */
  type: 'success' | 'error';
  /**
   * The content.
   */
  children: React.ReactNode;
}

/**
 * Represents an Alert component.
 */
export function Alert(props: AlertProps) {
  return <div />;
}
