import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <main>
      <Header />
        <Outlet />
      <Footer />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: <LandingPage />,
          path: "/",
        },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
