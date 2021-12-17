import { Story, Meta } from '@storybook/react';
import {
  HeadingDefault,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingTable,
  Label,
} from './Typography.style';

export default {
  component: HeadingDefault,
  title: 'Typography/Headers',
} as Meta;

export const Heading_L: Story = (args) => <HeadingLarge {...args} />;
Heading_L.args = {
  children: ' Heading-Large; Font-Size:24px; Font-Weight:600;',
};

export const Heading_D: Story = (args) => <HeadingDefault {...args} />;
Heading_D.args = {
  children: 'Heeding-Default: Font-Size: 20px; Font-Weight:600;',
};

export const Heading_Sml: Story = (args) => <HeadingSmall {...args} />;
Heading_Sml.args = {
  children: 'Heading-Small Font-Size: 14px; Font-Weight: 600;',
};

export const Heading_M: Story = (args) => <HeadingMedium {...args} />;
Heading_M.args = {
  children: 'Heading-Medium; Font-Size:20px; Font-Weight: 600;',
};

export const Heading_LA: Story = (args) => <Label {...args} />;
Heading_LA.args = { children: 'Label; Font-Size:16px; Font-weight: 400;' };

export const Heading_TB: Story = (args) => <HeadingTable {...args} />;
Heading_TB.args = {
  children: 'Heading-Table; Font-Size:12px; Font-Weight:400; Opacity: 0.7; ',
};
