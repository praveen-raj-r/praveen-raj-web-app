import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import TimeLine from "./pages/TimeLine";
import Stack from "./pages/Stack";
import Thanks from "./pages/Thanks";
import Books from "./pages/Books";
import Links from "./pages/Links";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/work",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/links",
        element: <Links />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
