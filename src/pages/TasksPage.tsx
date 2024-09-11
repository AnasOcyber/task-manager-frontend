import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTask from "../components/CreateTask";
import TaskBox from "../components/TaskBox";
import apiClient from "../services/apiClient";
import { AxiosError } from "axios";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const completedTasks = tasks.filter((t) => !t.isCompleted);
  const pendingTasks = tasks.filter((t) => t.isCompleted);

  useEffect(() => {
    const token = sessionStorage.getItem("AccessToken");

    if (!token) navigate("/login");

    apiClient
      .get("tasks", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setTasks(res.data))
      .catch((err) => {
        if (err instanceof AxiosError) setError(err.response?.data.message);
      });
  }, []);

  return (
    <VStack gap={5}>
      <Tabs variant="soft-rounded" colorScheme="green" isFitted>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Completed</Tab>
        </TabList>
        {error && <Text marginTop={5}>{error}</Text>}
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
      <CreateTask />
    </VStack>
  );
};

export default TasksPage;
