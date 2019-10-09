import React from 'react';

interface DeleteConfirmationModalProps {
  /**
   * True if the modal should be displayed.
   */
  isOpened: boolean;

  /**
   * The description to display.
   */
  children: React.ReactNode;
  /**
   * Triggered when cancel is clicked.
   */
  onCancel: () => void;
  /**
   * Triggered when delete is clicked.
   */
  onDelete: () => void;
}

/**
 * Represents a Delete Confirmation Modal component.
 */
export function DeleteConfirmationModal(props: DeleteConfirmationModalProps) {
  return <div />;
}
