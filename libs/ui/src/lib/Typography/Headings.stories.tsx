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

export const Heading_Large: Story = (args) => <HeadingLarge {...args} />;
Heading_Large.args = {
  children: ' Heading-Large; Font-Size:24px; Font-Weight:600;',
};

export const Heading_Default: Story = (args) => <HeadingDefault {...args} />;
Heading_Default.args = {
  children: 'Heeding-Default: Font-Size: 20px; Font-Weight:600;',
};

export const Heading_Small: Story = (args) => <HeadingSmall {...args} />;
Heading_Small.args = {
  children: 'Heading-Small Font-Size: 14px; Font-Weight: 600;',
};

export const Heading_Medium: Story = (args) => <HeadingMedium {...args} />;
Heading_Medium.args = {
  children: 'Heading-Medium; Font-Size:20px; Font-Weight: 600;',
};

export const Heading_Label: Story = (args) => <Label {...args} />;
Heading_Label.args = { children: 'Label; Font-Size:16px; Font-weight: 400;' };

export const Heading_Table: Story = (args) => <HeadingTable {...args} />;
Heading_Table.args = {
  children: 'Heading-Table; Font-Size:12px; Font-Weight:400; Opacity: 0.7; ',
};
