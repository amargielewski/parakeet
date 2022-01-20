import styled from 'styled-components';
import Calendar from 'react-calendar';
import { Button, Input } from '@parakeet/ui';
import { format } from 'date-fns';
import { Icon, TextLarge } from '@parakeet/ui';
import { UserBox } from './UserBox';

import UserOneIcon from '../../assets/userPhotos/User1.png';
import UserTwoIcon from '../../assets/userPhotos/User2.png';
import UserThreeIcon from '../../assets/userPhotos/User3.png';

const StyledWrapper = styled.div`
  max-width: 270px;
  width: 100%;
  background: ${({ theme }) => theme.colors.calendar_background_primary};
  padding: 30px;
  color: ${({ theme }) => theme.colors.text_primary};
`;
const StyledCalendar = styled(Calendar)`
  background: ${({ theme }) => theme.colors.calendar_background_primary};
  color: ${({ theme }) => theme.colors.text_primary}CC;
  border: none;

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    font-size: 12px;
  }

  .react-calendar__tile {
    padding: 6px 5px;
    color: ${({ theme }) => theme.colors.text_primary}CC;
    font-size: 12px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.calendar_schedule_tile_hover};
    border-radius: 4px;
  }

  .react-calendar__navigation {
    margin-bottom: 5px;
    height: max-content;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text_primary}B3;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.colors.text_primary}4d;
  }

  .react-calendar__year-view__months__month:enabled:hover,
  .react-calendar__year-view__months__month:enabled:focus {
    border-radius: 4px;
  }

  .react-calendar__year-view__months__month {
    text-transform: capitalize;
  }

  .react-calendar__navigation__prev-button {
    order: 2;
  }

  .react-calendar__navigation__next-button {
    order: 3;
  }

  .react-calendar__navigation button {
    min-width: max-content;
  }

  .react-calendar__navigation__next2-button.react-calendar__navigation__arrow {
    display: none;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__navigation__label {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    color: ${({ theme }) => theme.colors.text_primary}CC;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    order: 1;
    text-align: start;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.colors.calendar_background_tile_hover}6e;
    border-radius: 4px;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    transition: 0.4s ease-in;
    background: ${({ theme }) => theme.colors.calendar_background_tile_hover}28;
    border-radius: 8px;
  }

  .react-calendar__navigation button[disabled] {
    background: ${({ theme }) => theme.colors.calendar_background_primary};
  }
`;

const StyledButton = styled(Button)`
  text-transform: capitalize;
  margin-bottom: 20px;
`;

const StyledButtonSecondary = styled(Button)`
  text-transform: capitalize;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const StyledCalendarWrapper = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text_primary}40;
  border-radius: 8px;
`;

const StyledInputWrapper = styled.div`
  margin-top: 30px;
`;
const StyledInputText = styled(TextLarge)`
  margin-bottom: 20px;
`;

const StyledUserBoxContainer = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  max-height: 160px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.text_primary}40;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #615bffb9;
  }
`;

const UsersTest = [
  { src: UserOneIcon, name: 'Jan Kowalski', email: 'JanKowalski@gmail.com' },
  { src: UserTwoIcon, name: 'Karol Nowak', email: 'KarolNowak@gmail.com' },
  { src: UserTwoIcon, name: 'Robert Wójcik ', email: 'RobertWójcik@gmail.com' },
  { src: UserTwoIcon, name: 'Robert Wójcik ', email: 'RobertWójcik@gmail.com' },
  { src: UserTwoIcon, name: 'Robert Wójcik ', email: 'RobertWójcik@gmail.com' },
  { src: UserTwoIcon, name: 'Robert Wójcik ', email: 'RobertWójcik@gmail.com' },
];

export const CreateSchedule = () => {
  return (
    <StyledWrapper>
      <StyledButton icon={{ name: 'AddIcon', size: 14, position: 'left' }}>
        create schedule
      </StyledButton>
      <StyledCalendarWrapper>
        <StyledCalendar
          formatShortWeekday={(local, date) => format(date, 'eeeee')}
          nextLabel={<Icon name="CalendarRightArrowIcon" size={6} />}
          prevLabel={<Icon name="CalendarLeftArrowIcon" size={6} />}
        />
      </StyledCalendarWrapper>
      <StyledInputWrapper>
        <StyledInputText>People</StyledInputText>
        <Input placeholder="Search for People" appearance="secondary" />
      </StyledInputWrapper>

      <StyledUserBoxContainer>
        {UsersTest.map(({ src, name, email }) => (
          <UserBox src={src} name={name} email={email} />
        ))}
      </StyledUserBoxContainer>

      <StyledButtonSecondary appearance="secondary">
        my schedule
      </StyledButtonSecondary>
    </StyledWrapper>
  );
};
