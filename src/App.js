import Navigation from "./Navigation";

// CSS imports
import "./css/App.css";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Projects from "./pages/Projects";

// Project imports
import Wordle from "./projects/wordle/wordle";
import Calculator from "./projects/calculator/calculator";
import ConnectFour from "./projects/connectFour/connectFour";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="wordle" element={<Wordle />} />
      <Route path="connectFour" element={<ConnectFour />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default function App() {
  console.log(window.innerWidth);

  return <RouterProvider router={router} />;
}
