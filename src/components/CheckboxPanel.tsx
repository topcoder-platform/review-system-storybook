import React from 'react';

interface CheckboxPanelProps {
  /**
   * The main title.
   */
  title: string;
  /**
   * The content.
   */
  children: React.ReactNode;

  /**
   * Flag if checked
   */
  checked: boolean;

  /**
   * Triggered when item is checked.
   */
  onChecked: () => void;
}

/**
 * Represents a Checkbox Panel component.
 *
 * NOTE: do not reuse <Checkbox> here. The whole content should be clickable.
 */
export function CheckboxPanel(props: CheckboxPanelProps) {
  return <div />;
}
