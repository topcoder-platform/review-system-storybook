import React from 'react';

interface DropdownProps {
  /**
   * A dropdown content. Clicking on it will trigger the popup.
   */
  children: React.ReactNode;
  /**
   * A dropdown popup content.
   */
  popup: React.ReactNode;
}

/**
 * Represents a dropdown component.
 */
export function Dropdown(props: DropdownProps) {
  return <div />;
}

interface DropdownItemProps {
  /**
   * Content or text
   */
  children: React.ReactNode;
  /**
   * Invoked after clicking the element.
   */
  onClick?: () => void;
  /**
   * Redirect url after clicking the element.
   */
  url?: string;
}

/**
 * Represents a dropdown menu item.
 */
export function DropdownItem(props: DropdownItemProps) {
  return <div />;
}

interface DropdownMenuProps {
  /**
   * A list of <DropdownItem /> elements.
   */
  children: React.ReactNode;
}

/**
 * Represents a dropdown menu container.
 */
export function DropdownMenu(props: DropdownMenuProps) {
  return <div />;
}
