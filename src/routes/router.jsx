import {
  createBrowserRouter,
} from "react-router";
import MainPage from "./MainPage";
import Hero from "../components/Home/Hero";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children:[{
        path: '/',
        element: <Hero></Hero>
    }]
  },
]);

export default router;