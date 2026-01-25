import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";
import PageNotFound from "./pages/page-not-found";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/landing-page";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} /> <Toaster />
    </ThemeProvider>
  );
}

export default App;
