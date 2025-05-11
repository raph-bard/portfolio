import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['blue', 'red', 'green', 'yellow'],
      description: 'Choisir la couleur du badge.',
    },
    children: {
      control: 'text',
      description: 'Contenu à afficher dans le badge.',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires à appliquer au badge.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Le composant Badge gère deux cas :
- Si "children" est un tableau de plusieurs éléments, il retourne un ul>li.
- Sinon, il retourne une div simple avec le contenu à l’intérieur.

Chaque badge peut avoir une couleur de fond et de texte en fonction de la variante fournie.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const SingleBadge: Story = {
  args: {
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        story: `Affiche un badge unique dans une balise div. C'est le comportement par défaut si "children" est une string ou un tableau avec un seul élément.`,
      },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const BadgeList: Story = {
  args: {
    children: ['React', 'JavaScript', 'TypeScript', 'Next.js'],
  },
  parameters: {
    docs: {
      description: {
        story: `Affiche une liste de badges dans une balise ul avec des li, uniquement si "children" est un tableau contenant plusieurs éléments.`,
      },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const Colors: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="blue">Blue Badge</Badge>
      <Badge variant="red">Red Badge</Badge>
      <Badge variant="green">Green Badge</Badge>
      <Badge variant="yellow">Yellow Badge</Badge>
    </div>
  ),
};
