import styled from 'styled-components';

/* eslint-disable-next-line */
export type UiProps = {};

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}

export default Ui;
