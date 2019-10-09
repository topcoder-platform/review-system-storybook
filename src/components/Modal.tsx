import React from 'react';

interface ModalProps {
  /**
   * True if the modal should be displayed.
   */
  isOpened: boolean;

  /**
   * The content to display.
   */
  children: React.ReactNode;
}

/**
 * Represents a base Modal component. It should be used as a base modal for other modal dialogs.
 *
 * This component should display an alpha layer and a centered children component.
 */
export function Modal(props: ModalProps) {
  return <div />;
}
