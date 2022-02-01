import { CreateSchedule } from '../../components/CreateSchedule/CreateSchedule';
import { CalendarLayout } from '../../components/_layout/CalendarLayout/CalendarLayout';
import {
  StyledWrapper,
  StyledScheduleContainer,
  StyledPageTitle,
} from './Calendar.styled';
import { Tabs } from '@parakeet/ui';
import { CalendarSchedule } from '../../components/Calendar/Calendar';
const TabContent = [{ component: <CalendarSchedule />, name: 'Calendar' }];

export const Calendar = () => {
  return (
    <CalendarLayout>
      <StyledWrapper>
        <StyledScheduleContainer>
          <StyledPageTitle>Calendar</StyledPageTitle>
          <CreateSchedule />
        </StyledScheduleContainer>
        <Tabs tabs={TabContent} defaultTab="Calendar" />
      </StyledWrapper>
    </CalendarLayout>
  );
};
