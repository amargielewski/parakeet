import { Icon, IconProps } from '../../Icon/Icon';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TextLarge } from '../../Typography/Typography.style';

type SidebarLinkSizeProps = 20 | 24;

type SidebarLinkText =
  | 'dashboard'
  | 'analytics'
  | 'invoice'
  | 'schedule'
  | 'calendar'
  | 'messages'
  | 'notification'
  | 'settings';

export type SidebarLinkProps = {
  iconName: IconProps['name'];
  linkText: SidebarLinkText;
  iconSize: SidebarLinkSizeProps;
  linkTo: string;
};

export const StyledWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.5;
  position: relative;
  &.active {
    opacity: 1;

    ::after {
      position: absolute;
      left: -30px;
      content: '';
      width: 50px;
      height: 100%;
      background: linear-gradient(
        90deg,
        #aca9ff 0%,
        rgba(172, 169, 255, 0) 91.25%
      );
      opacity: 0.2;
      border-radius: 0px 5px 5px 0px;
    }

    filter: invert(44%) sepia(81%) saturate(5590%) hue-rotate(233deg)
      brightness(104%) contrast(101%);
  }

 
`;

export const StyledIcon = styled(Icon)`
  margin-right: 15px;
`;

export const StyledLinkText = styled(TextLarge)`
  text-transform: capitalize;
`;

export const SidebarLink = ({
  iconName,
  linkText,
  iconSize,
  linkTo = '/',
}: SidebarLinkProps) => {
  return (
    <StyledWrapper to={linkTo}>
      <StyledIcon name={iconName} size={iconSize} />
      <StyledLinkText>{linkText}</StyledLinkText>
    </StyledWrapper>
  );
};
