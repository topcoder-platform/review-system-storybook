import React from 'react';

interface DndPlaceholderProps {
  /**
   * True if placeholder should take 100% height.
   */
  full?: boolean;
}

/**
 * Represents a Drag & Drop placeholder component.
 */
export function DndPlaceholder(props: DndPlaceholderProps) {
  return <div />;
}
