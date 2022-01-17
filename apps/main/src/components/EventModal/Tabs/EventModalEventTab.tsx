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
  StyledInputDateRangeWrapper,
  StyledButtonContainer,
  StyledDateTimeRange,
  StyledDateRangeText,
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

  console.log(dateRange && dateRange[0]?.toLocaleString());
  console.log(dateRange && dateRange[0]?.toLocaleDateString());

  return (
    <StyledWrapper>
      <StyledForm>
        <StyledInputWrapper>
          <StyledInput appearance="tertiary" placeholder="Add title" />
        </StyledInputWrapper>
        <StyledInputDateRangeWrapper>
          <StyledDateRangeText>
            {dateRange && format(dateRange[0]!, ' dd MMMM yyyy kk : mm')} to
            {dateRange && format(dateRange[1]!, ' dd MMMM yyyy kk : mm')}
          </StyledDateRangeText>
          <StyledDateTimeRange
            disableClock={true}
            onChange={handleChange}
            value={dateRange}
            calendarIcon={<Icon name="CalendarIcon" size={22} />}
            disableCalendar={false}
            clearIcon={'Clear'}
            required
          />
        </StyledInputDateRangeWrapper>

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
      </StyledForm>
    </StyledWrapper>
  );
};
