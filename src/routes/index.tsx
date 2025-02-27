import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found";
import LandingPage from "@/pages/landing-page";
import AppLayout from "@/layout/app-layout";
import Timeline from "@/pages/timeline";

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
        path: "/work",
        element: <>work</>,
      },
      {
        path: "/about",
        element: <>about</>,
      },
      {
        path: "/story",
        element: <>story</>,
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
        path: "/supporters",
        element: <>supporters</>,
      },
      {
        path: "/bookshelf",
        element: <>bookshelf</>,
      },
      {
        path: "/tech-stack",
        element: <>tech Stack</>,
      },
      {
        path: "/version",
        element: <>Version</>,
      },
      {
        path: "/uikit",
        element: <>uikit</>,
      },
      {
        path: "/skills",
        element: <>skills</>,
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
