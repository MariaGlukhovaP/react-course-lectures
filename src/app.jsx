import { Provider } from "react-redux";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { Layout } from "./components/layout/layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { store } from "./redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeadphonesPage } from "./pages/headphones-page";
import { HeadphonePage } from "./pages/headphone-page";
import { HomePage } from "./pages/home-page";
import { HeadphoneReviewsPage } from "./pages/headphone-reviews-page";
import { HeadphonesCodecsPage } from "./pages/headphone-codecs-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "headphones",
        element: <HeadphonesPage />,
        children: [
          {
            path: ":headphoneId",
            element: <HeadphonePage />,
            children: [
              { index: true, element: <Navigate to="reviews" replace /> },
              { path: "reviews", element: <HeadphoneReviewsPage /> },
              { path: "codecs", element: <HeadphonesCodecsPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
