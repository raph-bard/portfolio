import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'textarea'] },
    value: { control: 'text' },
    required: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

type LocalProps = Omit<React.ComponentProps<typeof FormField>, 'value' | 'onChange'> & {
  initialValue?: string;
};

const StatefulFormField = ({ initialValue = '', ...props }: LocalProps) => {
  const [value, setValue] = useState(initialValue);
  return (
    <FormField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const AllFields: Story = {
  render: () => (
    <StatefulFormField
      id="field"
      label="Label"
      type="text"
      initialValue=""
    />
  ),
  parameters: {
    docs: {
      page: null,
    },
  },
};


export const Text: Story = {
  render: () => (
    <StatefulFormField
      id="text"
      label="Texte"
      type="text"
    />
  ),
};

export const Email: Story = {
  render: () => (
    <StatefulFormField
      id="email"
      label="Email"
      type="email"
      required
    />
  ),
};

export const Textarea: Story = {
  render: () => (
    <StatefulFormField
      id="message"
      label="Message"
      type="textarea"
    />
  ),
};
