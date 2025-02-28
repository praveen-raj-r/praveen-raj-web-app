import { ThemeProvider } from "./context/theme-provider";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
