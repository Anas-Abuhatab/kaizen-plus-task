import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import App from "../App";

const DashBoard = lazy(() => import("./DashBoard"));
const Error404 = lazy(() => import("./Error404"));

const MYRouter = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<DashBoard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default MYRouter;
