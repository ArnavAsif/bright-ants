import {
  createBrowserRouter,
} from "react-router";
import MainPage from "./MainPage";
import HomePage from "../components/Home/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children:[{
        path: '/',
        element: <HomePage></HomePage>
    }]
  },
]);

export default router;