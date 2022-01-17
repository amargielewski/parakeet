import { useState } from 'react';
import {
  StyledWrapper,
  StyledTabButton,
  StyledTabText,
  StyledTabContentWrapper,
  StyledTabWrapper,
} from './Tabs.styled';

type TabContentProps = {
  component: JSX.Element;
  name: string;
};

export type TabsProps = {
  tabs: TabContentProps[];
  defaultTab: string;
};

export const Tabs = ({ tabs, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  return (
    <StyledWrapper>
      <StyledTabWrapper>
        {tabs.map(({ name }) => (
          <StyledTabButton
            key={name}
            active={activeTab === name}
            onClick={() => setActiveTab(name)}
          >
            <StyledTabText>{name}</StyledTabText>
          </StyledTabButton>
        ))}
      </StyledTabWrapper>

      <StyledTabContentWrapper>
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </StyledTabContentWrapper>
    </StyledWrapper>
  );
};
