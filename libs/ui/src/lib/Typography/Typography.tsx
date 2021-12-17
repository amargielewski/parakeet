import styled from 'styled-components';

/* eslint-disable-next-line */
export type TypographyProps = {};

const StyledTypography = styled.div`
  color: pink;
`;

export function Typography(props: TypographyProps) {
  return (
    <StyledTypography>
      <h1>Welcome to Typography!</h1>
    </StyledTypography>
  );
}

export default Typography;
