import { Button, ButtonGroup, HStack, Image } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <HStack paddingX={10} paddingY={5} justifyContent="space-between">
      <Link to="/">
        <Image src={logo} width={12} />
      </Link>
      <ButtonGroup>
        <Button colorScheme="gray">
          <NavLink to="/login">Login</NavLink>
        </Button>
        <Button colorScheme="green">
          <NavLink to="/register">Register</NavLink>
        </Button>
      </ButtonGroup>
    </HStack>
  );
};

export default Navbar;
