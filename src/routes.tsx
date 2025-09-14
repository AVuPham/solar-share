import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: "/solar-share", // 🔥 quan trọng
  }
);

export default router;
