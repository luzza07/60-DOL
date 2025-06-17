import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

import ContactPage from "./components/ContactPage";
import UserDetailPage from "./components/UserDetail";
import Layout from "./components/Layout";
import UsersPage from "./components/UsersPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },

      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
