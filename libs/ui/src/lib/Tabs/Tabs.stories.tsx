import { Story, Meta } from '@storybook/react';
import { Tabs, TabsProps } from './Tabs';

export default {
  component: Tabs,
  title: 'Tabs/Tabs',
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

const componentArg = <div>123</div>;

export const Primary = Template.bind({});
Primary.args = { tabs: [{ component: componentArg, name: 'select' }] };
