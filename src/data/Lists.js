import About from "../components/About";
import Home from "../components/Home";
import Shop from "../components/Shop";

export const NavList = [
  {
    id: 1,
    title: "Home",
    element: <Home />,
    linkto: "/",
  },
  {
    id: 2,
    title: "Shop",
    element: <Shop />,
    linkto: "/shop",
  },
  {
    id: 3,
    title: "About",
    element: <About />,
    linkto: "/about",
  },
];
