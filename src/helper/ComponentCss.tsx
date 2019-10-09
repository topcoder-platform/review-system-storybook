import React from 'react';

interface ComponentCssProps {
  target: string;
  children?: React.ReactNode;
}

/**
 * Represents a component.
 */
export function ComponentCss(props: ComponentCssProps) {
  const { target, children } = props;
  return (
    <div>
      <code>{`<${target} />`}</code> {children || "it's based on div and CSS. "}
    </div>
  );
}
