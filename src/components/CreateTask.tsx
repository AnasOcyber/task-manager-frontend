import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef } from "react";

const CreateTask = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    const task = {
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
    };

    axios
      .post("http://localhost:3000/tasks", task)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Create Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={titleRef} />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Description</FormLabel>
              <Textarea ref={descriptionRef} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleClick}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTask;