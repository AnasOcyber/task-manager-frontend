import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const TaskBox = () => {
  return (
    <Box w="100%" p={4} rounded="lg" ring={1} width={500} maxWidth={800}>
      <HStack justifyContent="space-between" gap={10}>
        <Box>
          <Heading fontSize={18} fontWeight="semibold">
            Task Title
          </Heading>
          <Text>Task description</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TaskBox;
