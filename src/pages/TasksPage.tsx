import {
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import TaskBox from "../components/TaskBox";

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
            <VStack>
              <TaskBox />
              <TaskBox />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <TaskBox />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default TasksPage;
