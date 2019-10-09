import React from 'react';

interface ListProps {
  /**
   * A list of <ListItem /> components.
   */
  children: React.ReactNode;
}

/**
 * Represents a List component.
 */
export function List(props: ListProps) {
  return <div />;
}

interface ListItemProps {
  /**
   * The content.
   */
  children: React.ReactNode;

  /**
   * True if border is rounded.
   */
  rounded?: boolean;

  /**
   * True if add green border.
   */
  success?: boolean;

  /**
   * True if add gray background
   */
  muted?: boolean;

  /**
   * An optional content that will be right aligned.
   */
  right?: React.ReactNode;
}

/**
 * Represents a List Item component.
 */
export function ListItem(props: ListItemProps) {
  return <div />;
}
