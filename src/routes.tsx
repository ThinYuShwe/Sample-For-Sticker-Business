import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import HomePage from "@pages/Home";
import AboutPage from "@/pages/About";
import BlogDetailPage from "@/pages/blogs/BlogDetail";
import BlogPage from "@/pages/blogs/Blog";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout";
import ErrorPage from "@pages/Error";
import ProductPage from "@/pages/products/Product";
import ProductRootLayout from "@/pages/products/ProductRootLayout";
import ProductDetailPage from "@/pages/products/ProductDetail";

// Routes is the configuration for the router. It defines the routes and their corresponding components.
// The router will use this configuration to render the appropriate components based on the current URL.
// The router is created using the createBrowserRouter function from react-router-dom. It takes an array of route objects as its argument.
// RootLayout is the layout component that wraps around the children components. It contains the Header and Footer components that will be displayed on every page.
// RootLayout is used as the layout for the routes defined in Routes.
// The children of RootLayout will be rendered in the Outlet component, which is where the content of each route will be displayed.
// The children of RootLayout are HomePage and ContactPage.

//* if you want to see the nested routes, in the parent component, you need to provide outlet component
export const router = createBrowserRouter([
  {
    // home page
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        // about page
        path: "about",
        element: <AboutPage />,
      },
      {
        // blogs page
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <BlogPage /> },
          {
            // blog detail page
            path: ":postId",
            element: <BlogDetailPage />,
          },
        ],
      },
      {
        // products page
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          {
            // blog detail page
            path: ":productId",
            element: <ProductDetailPage />,
          },
        ],
      },
    ],
  },
]);
