import { Meta, StoryObj } from "@storybook/react";
import { Icon, iconMap, IconName } from "./Icon";

const meta: Meta<typeof Icon> = {
    component: Icon,
    tags: ["autodocs"],
    argTypes: {
      name: {
        control: false,
        table: { disable: true },
      },
      className: {
        description:
          "Permet de modifier la taille ou la couleur de l’icône via les classes Tailwind (ex. `text-2xl`, `text-blue-500`). La taille et la couleur par défaut dépendent du style parent si non spécifié.",
      },
    },
  };  

export default meta;

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
    args: {
      className: "text-4xl",
    },
    render: ({ className }) => (
      <div className="flex gap-12">
        {Object.keys(iconMap).map((key) => (
          <div key={key} className="flex flex-col items-center">
            <Icon name={key as IconName} className={className} />
            <span className="mt-2 text-sm text-gray-600">{key}</span>
          </div>
        ))}
      </div>
    ),
  };
  
