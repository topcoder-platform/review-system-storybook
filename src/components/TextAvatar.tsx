import React from 'react';

interface TextAvatarProps {
  /**
   * The content.
   */
  children: React.ReactNode;
  /**
   * true if display as a circle
   */
  circle?: boolean;

  /**
   * The background color.
   */
  color: 'green' | 'blue' | 'green' | 'pink' | 'purple' | 'orange';
}

/**
 * Represents an avatar component that display text initials.
 */
export function TextAvatar(props: TextAvatarProps) {
  return <div />;
}
