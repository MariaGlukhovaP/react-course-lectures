import { Provider } from "react-redux";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { store } from "./redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeadphonePage } from "./components/headphone-page/headphone-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadphonesPage title="Headphones Page" />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "headphone/:headphoneId",
        element: <HeadphonePage />,
      },
      {
        path: "headphone/bla-bla",
        element: <div>bla-bla</div>,
      },
    ],
  },
  { path: "/about", element: <div>About</div> },
  { path: "blocked", element: <Navigate to="/about" replace /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
