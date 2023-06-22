import {
    createBrowserRouter,
  } from "react-router-dom";

// Main Route

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);