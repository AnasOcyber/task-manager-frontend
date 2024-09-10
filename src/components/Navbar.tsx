import { Button, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingX={16} paddingY={5}>
      <Link to="/">
        <Image src={logo} width={12} />
      </Link>
      <HStack columnGap={5}>
        <Button colorScheme="gray">
          <Link to="/login">Login</Link>
        </Button>
        <Button colorScheme="green">
          <Link to="/register">Register</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
