import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      firstName: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    axios
      .post("http://localhost:3000/auth/register", user)
      .then((res) => {
        if (res.data) navigate("/mytasks");
      })
      .catch((err) => console.error(err));
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
