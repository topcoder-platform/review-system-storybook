import React from 'react';

export interface Column<T> {
  /**
   * A column unique name.
   */
  name: string;
  /**
   * The display name.
   */
  displayName?: string;
  /**
   * True if column can be sorted.
   */
  sortable?: boolean;
  /**
   * A function to used to render a cell.
   */
  renderCell: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  /**
   * An array of all columns definitions.
   */
  columns: Array<Column<T>>;
  /**
   * A list of all items.
   */
  items: T[];
  /**
   * The total count of all items. If `items.length` is less than `total` then infinite loading will be triggered when scrolling down.
   */
  total: number;
  /**
   * True if loading indicator should be shown.
   */
  isLoading: boolean;
  /**
   * The name of current sorted column.
   */
  sortBy: string;
  /**
   * True if current sort order is descending.
   */
  sortDesc: boolean;
  /**
   * A callback triggered when user scrolls down.
   */
  loadMore: () => void;
}

/**
 * Represents a data table component.
 */
export function DataTable<T>(props: DataTableProps<T>) {
  return <div />;
}
