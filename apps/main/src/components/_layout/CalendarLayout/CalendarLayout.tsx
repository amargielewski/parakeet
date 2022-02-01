import { PropsWithChildren } from 'react';
import { StyledWrapper } from './CalendarLayout.styled';

// eslint-disable-next-line @typescript-eslint/ban-types
export type CalendarLayoutProps = PropsWithChildren<{}>;

export const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
