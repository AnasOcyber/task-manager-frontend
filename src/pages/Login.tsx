import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRef, FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
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
            <FormLabel>Email address</FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Log in
          </Button>
          <Text>
            New user? <Link to="/register">Register</Link>
          </Text>
        </VStack>
      </form>
    </VStack>
  );
};
export default Login;
