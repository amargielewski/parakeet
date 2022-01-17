import { Button, Icon, Input, HeadingSmall } from '@parakeet/ui';
import styled from 'styled-components';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

const StyledWrapper = styled.div``;
const StyledForm = styled.form``;
const StyledInput = styled(Input)``;
const StyledPeopleButton = styled(Button)`
  text-transform: capitalize;
`;

const StyledLocationButton = styled(Button)`
  text-transform: capitalize;
  margin-left: 20px;
`;

const StyledInputWrapper = styled.div`
  margin-top: 20px;
`;

const StyledInputDateRangeWrapper = styled.div`
  margin: 10px 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDateTimeRange = styled(DateTimeRangePicker)`
  .react-datetimerange-picker {
    display: inline-flex;
    position: relative;
  }
  .react-datetimerange-picker,
  .react-datetimerange-picker *,
  .react-datetimerange-picker *:before,
  .react-datetimerange-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-datetimerange-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-datetimerange-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: center;
    border: none;
    font-size: 13px;
  }
  .react-datetimerange-picker__inputGroup {
    min-width: calc(4px + (4px * 3) + 0.54em * 6 + 0.217em * 2);
    height: 100%;
    flex-grow: 1;
    padding: 0 2px;
  }
  .react-datetimerange-picker__inputGroup__divider {
    padding: 1px 0;
  }
  .react-datetimerange-picker__inputGroup__input {
    min-width: 0.54em;
    height: calc(100% - 2px);
    position: relative;
    padding: 1px;
    border: 0;
    background: none;
    color: ${({ theme }) => theme.colors.date_range_picker_font_primary};
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-datetimerange-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-datetimerange-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .react-datetimerange-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }
  .react-datetimerange-picker__inputGroup__amPm {
    font: inherit;
    -moz-appearance: menulist;
  }
  .react-datetimerange-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-datetimerange-picker__button:enabled {
    cursor: pointer;
  }
  .react-datetimerange-picker__button:enabled:hover
    .react-datetimerange-picker__button__icon,
  .react-datetimerange-picker__button:enabled:focus
    .react-datetimerange-picker__button__icon {
    stroke: #0078d7;
  }
  .react-datetimerange-picker__button:disabled
    .react-datetimerange-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-datetimerange-picker__button svg {
    display: inherit;
  }
  .react-datetimerange-picker__calendar,
  .react-datetimerange-picker__clock {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-datetimerange-picker__calendar--closed,
  .react-datetimerange-picker__clock--closed {
    display: none;
  }
  .react-datetimerange-picker__calendar {
    width: 350px;
    max-width: 100vw;
  }
  .react-datetimerange-picker__calendar .react-calendar {
    border-width: thin;
  }

  .react-datetime-picker__inputGroup__divider {
    color: ${({ theme }) => theme.colors.date_range_picker_font_primary};
  }

  .react-datetimerange-picker__range-divider {
    color: ${({ theme }) => theme.colors.date_range_picker_font_primary};
  }

  .react-datetimerange-picker__inputGroup__leadingZero {
    color: ${({ theme }) => theme.colors.date_range_picker_font_primary};
  }

  .react-datetimerange-picker__clear-button {
    color: ${({ theme }) => theme.colors.text_primary};
  }
`;

const StyledDateRangeText = styled(HeadingSmall)`
  font-size: 12px;
`;

export {
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
};
