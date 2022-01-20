import styled from 'styled-components';
import { TextMedium, TextSmall } from '@parakeet/ui';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledUserIcon = styled.img`
  background: #605bff;
  border-radius: 50%;
`;

const StyledUserInfoContainer = styled.div`
  margin-left: 15px;
`;

const StyledUsername = styled(TextMedium)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const StyledUserEmail = styled(TextSmall)`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.text_primary}80;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

type UserBoxProps = {
  src: string;
  name: string;
  email: string;
};

export const UserBox = ({ src, name, email }: UserBoxProps) => {
  return (
    <StyledWrapper>
      <StyledUserIcon src={src}></StyledUserIcon>
      <StyledUserInfoContainer>
        <StyledUsername>{name}</StyledUsername>
        <StyledUserEmail>{email}</StyledUserEmail>
      </StyledUserInfoContainer>
    </StyledWrapper>
  );
};
