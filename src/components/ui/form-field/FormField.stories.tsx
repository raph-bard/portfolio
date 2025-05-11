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

export const AllFields: Story = {
  args: {
    id: 'field',
    label: 'Label',
    type: 'text',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || '');
    return (
      <FormField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  parameters: {
    docs: {
      page: null,
    },
  },
};

export const Text: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormField
        id="text"
        label="Texte"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Email: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormField
        id="email"
        label="Email"
        type="email"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Textarea: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormField
        id="message"
        label="Message"
        type="textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
