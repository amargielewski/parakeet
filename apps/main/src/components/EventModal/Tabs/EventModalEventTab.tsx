import { Icon } from '@parakeet/ui';
import { useState } from 'react';
import { format } from 'date-fns';
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledPeopleButton,
  StyledLocationButton,
  StyledInputWrapper,
  StyledButtonContainer,
  StyledDateTimeContainer,
  StyledContentContainer,
  StyledDateTimeText,
  StyledTimeZoneText,
  StyledTimeButtonText,
  StyledTimeButton,
  StyledTimeIconButton,
  StyledCalendarContainer,
} from './EventTab.style';

type DateRangeType = [(Date | undefined)?, (Date | undefined)?] | null;

export const EventModalEventTab = () => {
  const [dateRange, setDateRange] = useState<DateRangeType>([
    new Date(),
    new Date(),
  ]);

  const handleChange = (value: DateRangeType) => {
    setDateRange(value);
  };

  return (
    <StyledWrapper>
      <StyledForm>
        <StyledInputWrapper>
          <StyledInput appearance="tertiary" placeholder="Add title" />
        </StyledInputWrapper>
        <StyledDateTimeContainer>
          <StyledTimeIconButton>
            <Icon name="ClockIcon" size={16} />
          </StyledTimeIconButton>
          <StyledContentContainer>
            <StyledDateTimeText>
              Thursday. December 5 12:00pm - 1:00pm
            </StyledDateTimeText>
            <StyledTimeZoneText>Time zone - Does not repeat</StyledTimeZoneText>
            <StyledTimeButton>
              <StyledTimeButtonText>Find a time</StyledTimeButtonText>
            </StyledTimeButton>
          </StyledContentContainer>
        </StyledDateTimeContainer>

        <StyledButtonContainer>
          <StyledPeopleButton
            icon={{ position: 'left', size: 18, name: 'PeopleIcon' }}
            size="small"
          >
            add people
          </StyledPeopleButton>
          <StyledLocationButton
            appearance="secondary"
            icon={{ position: 'left', size: 18, name: 'LocationIcon' }}
            size="small"
          >
            add location
          </StyledLocationButton>
        </StyledButtonContainer>

        <StyledCalendarContainer>
          <StyledTimeIconButton>
            <Icon name="SecondaryCalendarIcon" size={16} />
          </StyledTimeIconButton>
          <StyledContentContainer>
            <StyledDateTimeText>John Deo</StyledDateTimeText>
            <StyledTimeZoneText>
              Busy - Default visibllity - notity 30 minutes before
            </StyledTimeZoneText>
          </StyledContentContainer>
        </StyledCalendarContainer>
      </StyledForm>
    </StyledWrapper>
  );
};
