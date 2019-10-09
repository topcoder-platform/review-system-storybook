import React from 'react';

export interface NavbarProps {
  /**
   * A list of <NavbarItem /> elements.
   */
  children: React.ReactNode;
}

/**
 * Represents the navigation menu in the top header.
 */
export function Navbar(props: NavbarProps) {
  return <div />;
}

export interface NavbarItemProps {
  /**
   * The content/text.
   */
  children: React.ReactNode;
  /**
   * True if element is selected (green color, white triangle at the bottom).
   */
  isActive?: boolean;

  /**
   * The anchor url.
   */
  url: string;
}

/**
 * Represents the item in the navbar.
 */
export function NavbarItem(props: NavbarItemProps) {
  return <div />;
}
