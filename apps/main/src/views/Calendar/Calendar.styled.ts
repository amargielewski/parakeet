import { HeadingLarge } from '@parakeet/ui';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  padding: 30px;
  gap: 0 30px;
`;

export const StyledScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPageTitle = styled(HeadingLarge)`
  padding-bottom: 30px;
`;
