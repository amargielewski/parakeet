import { Tabs } from '@parakeet/ui';
import { EventModalReminderTab } from './Tabs/EventModalReminderTab';
import { EventModalTaskTab } from './Tabs/EventModalTaskTab';
import { EventModalEventTab } from './Tabs/EventModalEventTab';

const TabContent = [
  { component: <EventModalEventTab />, name: 'Event' },
  { component: <EventModalReminderTab />, name: 'Reminder' },
  { component: <EventModalTaskTab />, name: 'Task' },
];

export const ModalTabs = () => {
  return <Tabs tabs={TabContent} defaultTab="Event" />;
};
