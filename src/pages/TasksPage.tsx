import {
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const TasksPage = () => {
  return (
    <VStack>
      <Tabs variant="soft-rounded" colorScheme="green" isFitted>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UnorderedList>
              <ListItem>Task 1</ListItem>
              <ListItem>Task 2</ListItem>
              <ListItem>Task 3</ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <UnorderedList>
              <ListItem>Task 4</ListItem>
              <ListItem>Task 5</ListItem>
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default TasksPage;
