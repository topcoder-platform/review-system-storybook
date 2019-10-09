import React from 'react';

interface ComponentDepsProps {
  target?: string;
  deps: string[];
  children?: React.ReactNode;
}

/**
 * Represents a component.
 */
export function ComponentDeps(props: ComponentDepsProps) {
  const { target, deps, children } = props;
  return (
    <div>
      {target && <code>{`<${target} />`}</code>} dependencies:{' '}
      {deps.map((dep, i) => (
        <React.Fragment key={i}>
          <code>{`<${dep} />`}</code>
          {i + 1 < deps.length ? ', ' : ''}
        </React.Fragment>
      ))}{' '}
      {children}
    </div>
  );
}
