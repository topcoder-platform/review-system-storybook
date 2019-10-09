import React from 'react';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * The button size.
   * Don't implement it ff all buttons have the same size.
   * It can be used for future reference.
   *
   * @default default
   */
  size?: 'small' | 'default' | 'big';

  /**
   * The button background/foreground style.
   * 'primary' - green
   * 'secondary' - white with outline
   * 'danger' - red/ping background
   */
  type: 'primary' | 'secondary' | 'danger';

  /**
   * True if set width to 100%.
   */
  block?: boolean;

  /**
   * The html type.
   */
  htmlType?: 'submit' | 'reset' | 'button';

  /**
   * A custom icon displayed before text.
   */
  icon?: React.ReactNode;
}

/**
 * Represents a primitive button component.
 *
 * Base props (such as `onClick`, `children`) are extended from base `<button />` component.
 *
 * Prop `type` is renamed to `htmlType`.
 */
export function Button(props: ButtonProps) {
  return <div />;
}
