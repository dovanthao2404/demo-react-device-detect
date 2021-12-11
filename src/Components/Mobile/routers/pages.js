import { RoutesString } from "../../Modules/routesString";
import Home from "../pages/Home/Home";

const routes = [
  {
    path: RoutesString.Home,
    component: Home,
    exact: true,
  },
];
export default routes;
