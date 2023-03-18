import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/ABout/About";
import SignInD from "./Components/Ragistration/DriverRagistration/SignIn";
import SignUpD from "./Components/Ragistration/DriverRagistration/SignUp";
import SignUpC from "./Components/Ragistration/CompanyRagistration/SignUpC";
import SignInC from "./Components/Ragistration/CompanyRagistration/SignInC";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/ragistrationD",
    element: <SignInD />,
  },
  {
    path: "/ragistrationD/signUpD",
    element: <SignUpD />,
  },
  {
    path: "/ragistrationC",
    element: <SignInC />,
  },
  {
    path: "/ragistrationC/signUpC",
    element: <SignUpC />,
  },
  {
    path:'/contact',element:<Contact/>
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
