import { createBrowserRouter } from "react-router-dom";
import Certifications from "@/pages/certifications";
import PageNotFound from "@/pages/page-not-found";
import LandingPage from "@/pages/landing-page";
import AppLayout from "@/layout/app-layout";
import Timeline from "@/pages/timeline";
import Stack from "@/pages/stack";

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
        element: <>work</>,
      },
      {
        path: "/work/:workId",
        element: <>work id</>,
      },
      {
        path: "/about",
        element: <>about</>,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/tips",
        element: <>tips</>,
      },
      {
        path: "/links",
        element: <>links</>,
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
