import { Box, Heading, HStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}

const TaskBox = ({ title, description }: Props) => {
  return (
    <Box w="100%" p={4} rounded="lg" ring={1} width={500} maxWidth={800}>
      <HStack justifyContent="space-between" gap={10}>
        <Box>
          <Heading fontSize={18} fontWeight="semibold">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TaskBox;
