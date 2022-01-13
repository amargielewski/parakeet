import { Story, Meta } from '@storybook/react';
import { SidebarLink, SidebarLinkProps } from './SidebarLink';

export default {
  component: SidebarLink,
  title: 'Sidebar/SidebarLink',
} as Meta;

const Template: Story<SidebarLinkProps> = (args) => <SidebarLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconName: 'SettingsIcon',
  linkText: 'settings',
};
