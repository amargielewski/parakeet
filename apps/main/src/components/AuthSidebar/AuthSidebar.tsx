import styled, { css } from 'styled-components';
import { Button, Icon } from '@parakeet/ui';
import { HeadingLarge, TextLarge } from '@parakeet/ui';

const StyledWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.auth_sidebar};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const StyledTitle = styled(HeadingLarge)`
  margin-top: 40px;
  text-transform: uppercase;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitleButtonContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledTitleButton = styled(Button)`
  max-width: 160px;
  width: 100%;
  text-transform: capitalize;
`;

const StyledBreakLine = styled.div`
  max-width: 150px;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.auth_sidebar_break_line};
`;

const StyledBreakContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBreakText = styled(TextLarge)`
  text-transform: capitalize;
  margin: 0 15px;
`;

export type SidebarTitle = 'sign up' | 'log in';

export type AuthSidebarProps = {
  children: JSX.Element;
  title: SidebarTitle;
};

export const AuthSidebar = ({ children, title }: AuthSidebarProps) => {
  return (
    <StyledWrapper>
      <StyledTitleContainer>
        <Icon size={98} name={'LogoIcon'} />
        <StyledTitle>{title}</StyledTitle>
        <StyledTitleButtonContainer>
          <StyledTitleButton
            icon={{ position: 'left', size: 18, name: 'GoogleIcon' }}
            appearance="tertiary"
          >
            google
          </StyledTitleButton>
          <StyledTitleButton
            icon={{ position: 'left', size: 18, name: 'FacebookIcon' }}
            appearance="tertiary"
          >
            facebook
          </StyledTitleButton>
        </StyledTitleButtonContainer>
        <StyledBreakContainer>
          <StyledBreakLine />
          <StyledBreakText>or</StyledBreakText>
          <StyledBreakLine />
        </StyledBreakContainer>
      </StyledTitleContainer>
      {children}
    </StyledWrapper>
  );
};
