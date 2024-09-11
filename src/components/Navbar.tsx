import { Button, ButtonGroup, HStack, Image } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleClick = () => {
    sessionStorage.clear();
    logout();
  };

  return (
    <HStack paddingX={10} paddingY={5} justifyContent="space-between">
      <Link to="/">
        <Image src={logo} width={12} />
      </Link>
      {isAuthenticated ? (
        <Button colorScheme="gray" onClick={handleClick}>
          <NavLink to="/login">logout</NavLink>
        </Button>
      ) : (
        <ButtonGroup>
          <Button colorScheme="gray">
            <NavLink to="/login">Login</NavLink>
          </Button>
          <Button colorScheme="green">
            <NavLink to="/register">Register</NavLink>
          </Button>
        </ButtonGroup>
      )}
    </HStack>
  );
};

export default Navbar;
