import type { Preview } from '@storybook/react';
import '../src/index.css'; 

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;