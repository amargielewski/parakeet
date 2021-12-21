import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  component: Input,
  title: 'Input/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  appearance: 'tertiary',
  icon: { name: 'SearchIcon', size: 20 },
  placeholder: 'Search',
};
