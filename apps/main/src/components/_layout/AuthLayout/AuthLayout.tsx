import styled from 'styled-components';
import { PropsWithChildren } from 'react';
const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.auth_primary};
  height: 100vh;
  display: flex;
`;

// eslint-disable-next-line @typescript-eslint/ban-types
export type AuthLayoutProps = PropsWithChildren<{}>;

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
