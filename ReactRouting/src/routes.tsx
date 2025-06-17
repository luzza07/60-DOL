import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

import ContactPage from "./components/ContactPage";
import UserDetailPage from "./components/UserDetail";
import Layout from "./components/Layout";
import UsersPage from "./components/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
