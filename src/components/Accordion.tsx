import React from 'react';

interface AccordionProps {
  /**
   * The content.
   */
  children: React.ReactNode;
  /**
   * The title.
   */
  title: string;
  /**
   * The element appended to the title and right aligned.
   */
  right?: React.ReactNode;
  /**
   * True if content is expanded.
   */
  isExpanded: boolean;
  /**
   * Triggered when the expand icon is clicked.
   */
  onToggleExpand: () => void;

  /**
   * The color theme.
   * @default white
   */
  color?: 'white' | 'black';

  /**
   * Triggered when clicking 'X' button in the header.
   * If not defined then 'X' button won't be displayed.
   */
  onClose?: () => void;
}

/**
 * Represents a component.
 */
export function Accordion(props: AccordionProps) {
  return <div />;
}
