import {
  createBrowserRouter,
} from "react-router";
import MainPage from "./MainPage";
import HomePage from "../components/Home/HomePage";
import About from "../components/About/About";
import ContactUs from "../components/contact/ContactUs";
import Service from "../components/Service/Service";
import GraphicsDesign from "../components/Service/graphicsDesign";
import DigitalMediaDesign from "../components/Service/DigitalMediaDesign";
import UIandUX from "../components/Service/UIandUX";
import WebDesign from "../components/Service/WebDesign";
import WordPress from "../components/Service/WordPress";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/service',
        element: <Service></Service>,
        children: [
          {
            path: '/service/graphicsDesign',
            element: <GraphicsDesign></GraphicsDesign>
          },
          {
            path: '/service/digitalMediaDesign',
            element: <DigitalMediaDesign></DigitalMediaDesign>
          },
          {
            path: '/service/UIandUX',
            element: <UIandUX></UIandUX>
          },
          {
            path: '/service/webDesign',
            element: <WebDesign></WebDesign>
          },
          {
            path: '/service/wordPress',
            element: <WordPress></WordPress>
          }
        ]
      }
    ]
  },
]);

export default router;