import {
  createBrowserRouter,
} from "react-router";
import MainPage from "./MainPage";
import HomePage from "../components/Home/HomePage";
import About from "../components/About/About";
import ContactUs from "../components/contact/ContactUs";
import Service from "../components/Service/Service";
import DigitalMediaDesign from "../components/Service/DigitalMediaDesign";
import UIandUX from "../components/Service/UIandUX";
import WebDesign from "../components/Service/WebDesign";
import WordPress from "../components/Service/WordPress";
import Graphics from "../components/Service/Graphics";
import ServiceHome from "../components/Service/ServiceHome";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'service',
        element: <Service></Service>,
        children: [
          {
            index: true,
            element: <ServiceHome></ServiceHome>
          },
          {
            path: 'graphicsDesign',
            element: <Graphics></Graphics>
          },
          {
            path: 'digitalMediaDesign',
            element: <DigitalMediaDesign></DigitalMediaDesign>
          },
          {
            path: 'UIandUX',
            element: <UIandUX></UIandUX>
          },
          {
            path: 'webDesign',
            element: <WebDesign></WebDesign>
          },
          {
            path: 'wordPress',
            element: <WordPress></WordPress>
          }
        ]
      }
    ]
  },
]);

export default router;