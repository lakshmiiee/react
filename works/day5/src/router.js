import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Student from "./components/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "student/:name", element: <Student /> }
    ]
  }
]);

export default router;
