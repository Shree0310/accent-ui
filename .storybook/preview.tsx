import type { Preview } from '@storybook/react';
import React, { useState } from 'react';
import '../src/index.css';

const WelcomeTemplate = () => {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Welcome to accent-ui</h1>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '0.5rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 100000,
          }}
          onClick={() => setStarted(true)}
        >
          Get Started
        </button>
      </div>
    );
  }

  return null;
};

export const Welcome = {
  render: () => <WelcomeTemplate />,
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview; 