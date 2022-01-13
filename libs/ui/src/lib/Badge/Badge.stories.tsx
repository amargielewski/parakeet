import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  component: Badge,
  title: 'Badge',
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  badgeText: 'Hello World',
  bgColor: '#26C0E2',
  size: 'large',
  appereance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  badgeText: 'Hello World',
  bgColor: '#EF37FF',
  size: 'small',
  appereance: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  badgeText: 'Hello World',
  bgColor: '#FF8F6B',
  size: 'medium',
  appereance: 'primary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  badgeText: 'Hello World',
  bgColor: '#D11A2A',
  size: 'medium',
  appereance: 'tertiary',
};

export const BorderBadge = Template.bind({});
BorderBadge.args = {
  badgeText: 'Hello World',
  size: 'small',
  appereance: 'quaternary',
};
