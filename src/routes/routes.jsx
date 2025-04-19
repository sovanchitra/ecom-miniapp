import { Route } from "react-router";
import routesConfig from "./routesConfig";

const renderRoutes = (routes) =>
  routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
export const router = () => {
  return <>{renderRoutes(routesConfig)}</>;
};
