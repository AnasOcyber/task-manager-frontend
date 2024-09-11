import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

const RegisterPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      firstName: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    apiClient
      .post("auth/register", user)
      .then((res) => {
        if (res.data) navigate("/login");
      })
      .catch((err) => setError(err.response.data.message));
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
          <FormControl marginBottom={3}>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
          </FormControl>
          {error && (
            <Text color="red" marginBottom={5} alignSelf="flex-start">
              {error}
            </Text>
          )}
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

export default RegisterPage;
