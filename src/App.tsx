import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
