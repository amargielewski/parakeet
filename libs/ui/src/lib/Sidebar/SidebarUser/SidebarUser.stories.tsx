import { Story, Meta } from '@storybook/react';
import { SidebarUser } from './SidebarUser';

export default {
  component: SidebarUser,
  title: 'Sidebar/SidebarUser',
} as Meta;

const Template: Story = (args) => <SidebarUser {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
