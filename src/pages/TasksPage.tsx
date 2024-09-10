import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskBox from "../components/TaskBox";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.filter((t) => !t.isCompleted);
  const pendingTasks = tasks.filter((t) => t.isCompleted);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

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
              {completedTasks.map((task) => (
                <TaskBox
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              {pendingTasks.map((task) => (
                <TaskBox
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreateTaskModal />
    </VStack>
  );
};

export default TasksPage;
