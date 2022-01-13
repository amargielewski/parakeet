import styled from 'styled-components';
import { TextMedium, TextSmall } from '../../Typography/Typography.style';
import { Icon } from '../../Icon/Icon';

export const StyledLogoutIcon = styled(Icon);

export const StyledUsernameContainer = styled.div`
  margin-left: 10px;
  margin-right: 30px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledUserAvatar = styled.img`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sidebar_user}px;
  background: #fafafa;
  width: 45px;
  height: 45px;
`;

export const StyledUsername = styled(TextMedium)`
  margin-bottom: 3px;
`;

export const StyledUserAcountType = styled(TextSmall)`
  font-weight: 400;
  opacity: 0.5;
`;

export const SidebarUser = () => {
  return (
    <StyledWrapper>
      <StyledUserAvatar />
      <StyledUsernameContainer>
        <StyledUsername>Easin Arafat</StyledUsername>
        <StyledUserAcountType>Free acount</StyledUserAcountType>
      </StyledUsernameContainer>
      <Icon name="LogoutIcon" size={20} />
    </StyledWrapper>
  );
};
