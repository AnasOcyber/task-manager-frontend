import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskBox from "../components/TaskBox";

const TasksPage = () => {
  return (
    <VStack gap={5}>
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
      <CreateTaskModal />
    </VStack>
  );
};

export default TasksPage;
