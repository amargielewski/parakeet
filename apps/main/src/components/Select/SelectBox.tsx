import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select {
    &__control {
      background-color: ${({ theme }) => theme.colors.input_tertiary};
      color: ${({ theme }) => theme.colors.input_font};
      height: 50px;
      border: none;
      box-shadow: none;
      outline: none;
      cursor: pointer;
    }

    &__single-value {
      color: white;
    }

    &__placeholder {
      color: ${({ theme }) => theme.colors.input_font}4D;
    }

    &__menu {
      background-color: ${({ theme }) => theme.colors.input_tertiary};
      color: ${({ theme }) => theme.colors.input_font};
    }

    &__option {
      &--is-selected {
        background-color: ${({ theme }) =>
          theme.colors.select_selected_background};
      }

      &--is-focused {
        background-color: ${({ theme }) =>
          theme.colors.select_focused_background};
      }
    }
  }
`;

export type OptionsProps = {
  value: string;
  label: string;
};

export type SelectBoxProps = {
  options: Array<OptionsProps>;
};

export function SelectBox({ options }: SelectBoxProps) {
  return <StyledSelect classNamePrefix={'Select'} options={options} />;
}
