import { RouteType } from "types/RouteType";
import protectedRoutes from "./protectedRoutes";
import publicRoutes from "./publicRoutes";

const routes: Array<RouteType> = [...protectedRoutes, ...publicRoutes]
export default routes;