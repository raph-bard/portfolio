import type { Preview } from "@storybook/react";
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'custom-dark', // 👈 nom du fond par défaut
      values: [
        { name: 'custom-dark', value: '#0f172b' },
      ],
    },
    darkMode: {
      // 🔥 on désactive totalement le darkMode (plus de bascule possible)
      current: 'light',
      stylePreview: false,
      darkClass: '',
      lightClass: '',
    },
  },
};

export default preview;
