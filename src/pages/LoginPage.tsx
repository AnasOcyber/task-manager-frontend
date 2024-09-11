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

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    apiClient
      .post("auth/login", user)
      .then((res) => {
        if (res.data) {
          sessionStorage.setItem("AccessToken", res.data.access_token);
          navigate("/mytasks");
        }
      })
      .catch(({ response }) => setError(response.data.message));
  };

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <VStack width={360}>
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
export default LoginPage;
