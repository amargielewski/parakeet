import Calendar from 'react-calendar';
import styled from 'styled-components';
import { Icon } from '@parakeet/ui';
const StyledCalendarWrapper = styled.div`
  max-width: 870px;
  width: 100%;
  margin-top: 50px;
  margin-left: 50px;
`;

const StyledCalendar = styled(Calendar)`
  background: ${({ theme }) => theme.colors.calendar_background_primary};
  width: 100%;
  color: ${({ theme }) => theme.colors.text_primary};

  .react-calendar__month-view__weekdays__weekday {
    background-color: ${({ theme }) =>
      theme.colors.calendar_background_secondary};
    padding: 30px;
    font-size: 16px;
    font-weight: 600;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day {
    color: ${({ theme }) => theme.colors.text_primary}B3;
    padding: 40px;
    font-size: 24px;
    font-weight: 600;
    border: 1px solid
      ${({ theme }) => theme.colors.calendar_background_secondary};
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.colors.text_primary}4d;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    transition: 0.4s ease-in;

    background: ${({ theme }) => theme.colors.calendar_background_tile_hover}28;
  }

  .react-calendar__tile--active {
    background: ${({ theme }) => theme.colors.calendar_background_secondary}b3;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.colors.calendar_background_tile_hover}6e;
  }

  .react-calendar__year-view__months__month {
    color: ${({ theme }) => theme.colors.text_primary};
  }

  .react-calendar__navigation__label__labelText--from {
    color: ${({ theme }) => theme.colors.text_primary};
  }

  .react-calendar__navigation__label {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600px;
    order: 1;
  }

  .react-calendar__navigation__prev-button:disabled,
  .react-calendar__navigation__prev2-button:disabled {
    display: none;
  }

  .react-calendar__tile:disabled {
    opacity: 0.05;
    color: black;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled {
    color: #00000099;
  }

  .react-calendar__navigation__prev-button {
    order: 2;
  }

  .react-calendar__navigation__next-button {
    order: 3;
  }

  .react-calendar__navigation__next2-button.react-calendar__navigation__arrow {
    display: none;
  }

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    transition: 0.4s ease-in;
    background: ${({ theme }) => theme.colors.calendar_background_tile_hover}28;
  }
`;

export const CalendarSchedule = () => {
  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        nextLabel={<Icon name="CalendarRightArrowIcon" size={10} />}
        prevLabel={<Icon name="CalendarLeftArrowIcon" size={10} />}
        minDate={new Date()}
      ></StyledCalendar>
    </StyledCalendarWrapper>
  );
};
