import { Story, Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar/Sidebar',
} as Meta;

const Template: Story = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
