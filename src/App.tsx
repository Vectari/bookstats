import { Outlet } from "react-router-dom";
import { NavBar } from "./sections/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
