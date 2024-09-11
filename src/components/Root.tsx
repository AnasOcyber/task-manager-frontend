import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
};

export default Root;
