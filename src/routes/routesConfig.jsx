import RootLayout from "../components/layout/RootLayout";
import WidthConstraintLayout from "../components/layout/WidthConstraintLayout";
import { ProductPage, MenuDetailPage } from "../routes/index";

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <WidthConstraintLayout />,
        children: [
          {
            path: "/",
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
        ],
      },
    ],
  },
  {
    path: "/",
    element: <WidthConstraintLayout />,
    children: [
      {
        path: "menu/:id",
        element: <MenuDetailPage />,
      },
    ],
  },
];

export default routesConfig;
