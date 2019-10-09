import React from 'react';

interface ReviewStatusProps {
  /**
   * The review status. A proper icon and text will be rendered.
   */
  status: 'complete' | 'pending' | 'running';
}

/**
 * Represents a a review status component.
 */
export function ReviewStatus(props: ReviewStatusProps) {
  return <div />;
}
