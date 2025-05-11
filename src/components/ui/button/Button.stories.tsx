import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['blue', 'red', 'green', 'yellow'],
      description: 'Choisir la couleur du bouton.',
    },
    children: {
      control: 'text',
      description: 'Texte ou contenu à afficher dans le bouton.',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires à appliquer au bouton.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Indique si le bouton est en état de chargement.',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton.',
    },
    href: {
      control: 'text',
      description: 'URL à laquelle le bouton redirige lorsqu’il est cliqué (si c’est un lien).',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Le composant Button est un bouton flexible avec différentes variantes de couleur et de comportement. Il peut :
- Afficher un texte ou un contenu personnalisé à l'intérieur.
- Se rendre "loading" avec une animation spinner.
- Accepter une URL si utilisé comme lien.
- Supporter des classes CSS supplémentaires pour la personnalisation.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: 'Click Me',
  },
  render: (args) => <Button {...args} />,
};

export const LoadingButton: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
  },
  render: (args) => <Button {...args} />,
};

export const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const ColoredButtons: Story = {
  args: {
    children: 'Click Me',
  },
  render: () => (
    <div className="flex gap-2">
      {meta.argTypes?.variant?.options?.map((variant) => (
      <Button className='capitalize' variant={variant}>{variant} button</Button>
      ))}
    </div>
  ),
};

