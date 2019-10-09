import React from 'react';

interface NotificationAlertProps {
  /**
   * The alert counter in the right-upper corner.
   */
  count: number;
  /**
   * A popup displayed after clicking on the icon.
   * TODO: this popup is not defined in the storyboard.
   */
  popup: React.ReactNode;
}

/**
 * Represents a notification alert icon component.
 */
export function NotificationAlert(props: NotificationAlertProps) {
  return <div />;
}
