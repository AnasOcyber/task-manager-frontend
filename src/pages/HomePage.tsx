import { Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <VStack>
      <Heading>Task Manager</Heading>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </VStack>
  );
};

export default HomePage;
