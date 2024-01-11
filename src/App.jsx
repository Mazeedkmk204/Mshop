import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import About from "./components/About";
import Blog from "./components/Blog";
import Review from "./components/Review";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: productsData },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/review", element: <Review /> },
    ],
  },
]);
const App = () => {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
};

export default App;
