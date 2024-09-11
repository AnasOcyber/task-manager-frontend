import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import apiClient from "../services/apiClient";

interface Props {
  id: number;
  title: string;
  description: string;
}

const TaskBox = ({ id, title, description }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    apiClient
      .delete("tasks/" + id, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("AccessToken"),
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you want to delete this task permanently?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleClick}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        w="100%"
        p={4}
        rounded="lg"
        ring={1}
        width={{ base: 450, lg: 500 }}
        maxWidth={800}
      >
        <HStack justifyContent="space-between" gap={10}>
          <Box>
            <Heading fontSize={{ base: 16, lg: 18 }} fontWeight="semibold">
              {title}
            </Heading>
            <Text>{description}</Text>
          </Box>
          <ButtonGroup>
            <Button colorScheme="red" onClick={onOpen}>
              Delete
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
    </>
  );
};

export default TaskBox;
