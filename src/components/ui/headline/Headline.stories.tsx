import { Meta, StoryObj } from "@storybook/react";
import Headline from "./Headline";

const meta: Meta<typeof Headline> = {
  component: Headline,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Balise HTML utilisée pour le titre.",
      defaultValue: "h2",
    },
    size: {
      control: { type: "select" },
      options: ["s", "m", "l", "one", "two", "three", "four", "five"],
      description: "Taille du texte.",
      defaultValue: "m",
    },
    children: {
      control: "text",
      description: "Contenu du Headline",
      defaultValue: "Exemple de Headline",
    },
    isLink: {
      control: "boolean",
      description: "Indique si le titre est un lien.",
      defaultValue: false,
    },
    href: {
      control: "text",
      description: "URL du lien (nécessaire si isLink est true).",
      defaultValue: "#",
    },
    showLinkIcon: {
      control: "boolean",
      description: "Affiche une icône de lien à côté du titre.",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Headline>;

export const Standard: Story = {
  args: {
    as: "h2",
    size: "m",
    children: "Lorem ipsum dolor sit amet",
  },
};
