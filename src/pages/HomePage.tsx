import { Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <VStack>
      <Heading>Task Manager</Heading>
      <Button colorScheme="green">
        <Link to="/register">Get Started</Link>
      </Button>
    </VStack>
  );
};

export default HomePage;
