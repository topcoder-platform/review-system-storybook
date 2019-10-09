import React from 'react';

interface TabsProps {
  /**
   * The index of the selected tab.
   */
  selectedIndex: number;
  /**
   * Triggered when clicking on the tab title.
   */
  onIndexChange: (index: number) => void;
  /**
   * A list of <Tab /> elements.
   */
  children: React.ReactNode;
}

/**
 * Represents a tabs component.
 */
export function Tabs(props: TabsProps) {
  return <div />;
}

interface TabProps {
  /**
   * A tab title.
   */
  title: string;
  /**
   * A tab content.
   */
  children: React.ReactNode;
}
/**
 * Represents a tab component.
 */
export function Tab(props: TabProps) {
  return <div />;
}
