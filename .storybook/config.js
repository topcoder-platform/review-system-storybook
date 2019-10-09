import { addParameters, configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    showPanel: false,
  },
});

configure(loadStories, module);
