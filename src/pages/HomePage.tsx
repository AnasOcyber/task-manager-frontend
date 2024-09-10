import { Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <VStack marginTop={10}>
      <Heading marginBottom={5}>Task Manager</Heading>
      <Button colorScheme="green">
        <Link to="/register">Get Started</Link>
      </Button>
    </VStack>
  );
};

export default HomePage;
