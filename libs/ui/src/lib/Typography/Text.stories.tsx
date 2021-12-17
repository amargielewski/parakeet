import { Story, Meta } from '@storybook/react';
import {
  TextDefault,
  TextLarge,
  TextMedium,
  TextSmall,
} from './Typography.style';

export default {
  component: TextLarge,
  title: 'Typography/Text',
} as Meta;

export const Text_Default: Story = (args) => <TextDefault {...args} />;
Text_Default.args = {
  children: 'Text-Default; Font-Size:10px; Font-Weight:600;',
};

export const Text_Medium: Story = (args) => <TextMedium {...args} />;
Text_Medium.args = { children: 'Text-Medium; Font-Size:12px; FontWeight:600;' };

export const Text_Small: Story = (args) => <TextSmall {...args} />;
Text_Small.args = { children: 'Text-Small; Font-Size:10px; font-weight:600;' };

export const Text_Large: Story = (args) => <TextLarge {...args} />;
Text_Large.args = { children: 'Text-Large; Font-Size:16px; Font-Weight:600; ' };
