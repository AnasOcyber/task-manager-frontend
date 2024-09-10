import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log(user); //TODO: Send user details to the backend
  };

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <VStack width={360}>
          <FormControl marginBottom={3}>
            <FormLabel>First Name</FormLabel>
            <Input type="text" ref={nameRef} />
          </FormControl>
          <FormControl marginBottom={3}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Create Account
          </Button>
          <Text>
            Existing user? <Link to="/login">Login</Link>
          </Text>
        </VStack>
      </form>
    </VStack>
  );
};

export default Register;
