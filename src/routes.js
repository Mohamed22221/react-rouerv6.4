import { createBrowserRouter } from "react-router-dom";
import App from "./layout/App";
import Home, { loader as homeLoader } from "./bages/Home";
import PostDetails ,{ loader as postLoader } from "./bages/PostDetails";
import Contact from "./bages/Contact";
import Faq from "./bages/Faq";
import ErrorPage from "./bages/ErrorPage";
import UserRoot from "./layout/UserRoot";
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
        path: "posts/:postId",
        element: <PostDetails />,
        loader: postLoader
      },

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
