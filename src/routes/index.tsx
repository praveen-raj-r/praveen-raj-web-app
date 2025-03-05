import { createBrowserRouter } from "react-router-dom";
import Certifications from "@/pages/certifications";
import PageNotFound from "@/pages/page-not-found";
import LandingPage from "@/pages/landing-page";
import AppLayout from "@/layout/app-layout";
import Timeline from "@/pages/timeline";
import Stack from "@/pages/stack";
import About from "@/pages/about";
import Works from "@/pages/works";
import Tips from "@/pages/tips";
import Links from "@/pages/links";

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
        element: <Timeline />,
      },
      {
        path: "/work",
        element: <Works />,
      },
      {
        path: "/work/:workId",
        element: <>work id</>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/tips",
        element: <Tips />,
      },
      {
        path: "/links",
        element: <Links />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
