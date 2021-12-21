import { Story, Meta } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

export default {
  component: Textarea,
  title: 'Textarea',
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
