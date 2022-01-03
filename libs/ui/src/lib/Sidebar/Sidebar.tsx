import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Heading_Large } from '../Typography/Headings.stories';
import { SidebarLink } from './SidebarLink/SidebarLink';
import { TextMedium } from '../Typography/Typography.style';
import LampImage from '../../Assets/Lamp.svg';
import { SidebarUser } from './SidebarUser/SidebarUser';

export const StyledWrapper = styled.div`
  max-width: 218px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.sidebar_primary};
  position: fixed;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 50px 0;
`;

export const StyledLogoIcon = styled(Icon)`
  margin-right: 15px;
`;

export const StyledLogoText = styled(Heading_Large)`
  text-transform: capitalize;
`;

export const StyledLinkContainer = styled.div`
  margin-left: 30px;
  align-self: flex-start;
`;

export const StyledUpgradeContainer = styled.div`
  width: 168px;
  height: 160px;
  margin-top: 90px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.sidebar_upgrade_background};
  border-radius: ${({ theme }) => theme.borderRadius.sidebar_upgrade}px;
  position: relative;
`;

export const StyledUpgradeButton = styled(Button)`
  max-width: 140px;
  margin-bottom: 15px;
`;

export const StyledUpgradeText = styled(TextMedium)`
  text-transform: capitalize;
`;

export const StyledUpgradeImage = styled.img`
  position: absolute;
  top: -32px;
`;

export const StyledSidebarUserContainer = styled.div`
  margin-top: 40px;
`;

export const Sidebar = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLogoContainer href="/">
          <StyledLogoIcon name="LogoIcon" size={42} />
          <StyledLogoText>base</StyledLogoText>
        </StyledLogoContainer>
        <StyledLinkContainer>
          <SidebarLink
            linkText="dashboard"
            iconName="CategoryIcon"
            iconSize={20}
            linkTo={'/home'}
          />

          <SidebarLink
            linkText="analytics"
            iconName="AnalyticsIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="invoice"
            iconName="InvoiceIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="schedule"
            iconName="ScheduleIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="calendar"
            iconName="CalendarIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="messages"
            iconName="MessagesIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="notification"
            iconName="NotificationIcon"
            iconSize={24}
            linkTo={'/'}
          />
          <SidebarLink
            linkText="settings"
            iconName="SettingsIcon"
            iconSize={24}
            linkTo={'/'}
          />
        </StyledLinkContainer>
        <StyledUpgradeContainer>
          <StyledUpgradeImage src={LampImage} alt="" />
          <StyledUpgradeButton appearance="primary" size="small">
            <StyledUpgradeText>upgrade now</StyledUpgradeText>
          </StyledUpgradeButton>
        </StyledUpgradeContainer>
        <StyledSidebarUserContainer>
          <SidebarUser />
        </StyledSidebarUserContainer>
      </StyledContainer>
    </StyledWrapper>
  );
};
