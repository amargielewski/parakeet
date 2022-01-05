import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type AuthBackgroundProps = {
  children: JSX.Element;
};

export const AuthBackground = ({ children }: AuthBackgroundProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
