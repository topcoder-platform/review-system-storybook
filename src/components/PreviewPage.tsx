import React from 'react';

interface PreviewPageProps {
  /**
   * The page title.
   */
  title: string;
  /**
   * Triggered when the edit icon is clicked.
   */
  onEdit: () => void;

  /**
   * The content.
   */
  children: React.ReactNode;
}

/**
 * Represents a preview page component.
 */
export function PreviewPage(props: PreviewPageProps) {
  return <div />;
}
