import { HomePage, ProductPage } from "../routes/index";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <div>Cart</div>,
  },
  {
    path: "/checkout",
    element: <div>Checkout</div>,
  },
];

export default routesConfig;
