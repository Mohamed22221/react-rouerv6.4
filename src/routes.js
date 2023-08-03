import { createBrowserRouter } from "react-router-dom";
import App from "./bages/App";
import Home, { loader as homeLoader } from "./bages/Home";
import Contact from "./bages/Contact";
import Faq from "./bages/Faq";
import ErrorPage from "./bages/ErrorPage";
import UserRoot from "./bages/UserRoot";
import UserInfo from "./bages/UserInfo";
import UserEdit from "./bages/UserEdit";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserRoot />,
    children: [
      { index: true, element: <div>hello kareem</div> },
      {
        path: "info",
        element: <UserInfo />,
      },
      {
        path: ":userId/edit",
        element: <UserEdit />,
      },
    ],
  },
]);
