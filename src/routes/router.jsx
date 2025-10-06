import { createBrowserRouter } from "react-router";
import React, { lazy } from "react";
import MainPage from "./MainPage";

// Lazy-loaded pages
const HomePage = lazy(() => import("../components/Home/HomePage"));
const About = lazy(() => import("../components/About/About"));
const ContactUs = lazy(() => import("../components/contact/ContactUs"));
const Service = lazy(() => import("../components/Service/Service"));
const ServiceHome = lazy(() => import("../components/Service/ServiceHome"));
const Graphics = lazy(() => import("../components/Service/Graphics"));
const DigitalMediaDesign = lazy(() =>
  import("../components/Service/DigitalMediaDesign")
);
const UIandUX = lazy(() => import("../components/Service/UIandUX"));
const WebDesign = lazy(() => import("../components/Service/WebDesign"));
const WordPress = lazy(() => import("../components/Service/WordPress"));
const Offers = lazy(() =>
  import("../components/Home/layouts/PromotionsAndProgress/Offers")
);
const Blogs = lazy(() => import("../components/Blogs/Blogs"));
const Blog = lazy(() => import("../components/Blogs/Blog"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      {
        path: "service",
        element: <Service />,
        children: [
          { index: true, element: <ServiceHome /> },
          { path: "graphicsDesign", element: <Graphics /> },
          { path: "digitalMediaDesign", element: <DigitalMediaDesign /> },
          { path: "UIandUX", element: <UIandUX /> },
          { path: "webDesign", element: <WebDesign /> },
          { path: "wordPress", element: <WordPress /> },
        ],
      },
      { path: "offers", element: <Offers /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:id", element: <Blog /> },
    ],
  },
]);

export default router;
