import { createBrowserRouter } from "react-router-dom";

// Pages, loader and actions
import RootLayout from "../pages/RootLayout.jsx";
import Page from "../pages/page.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Page />,
      }
    ],
  },
]);