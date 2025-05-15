import type { Meta } from '@storybook/react';
import { Welcome } from '../../.storybook/preview';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
};

export default meta;
export { Welcome as Default }; 