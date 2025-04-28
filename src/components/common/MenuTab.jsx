import { Heart, MoreHorizontal, ShoppingCart, Store } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

const TAB = [
  { name: "Menu", icon: <Store size={20} />, to: "/" },
  { name: "Favorite", icon: <Heart size={20} />, to: "/favorite" },
  { name: "Cart", icon: <ShoppingCart size={20} />, to: "/cart" },
  { name: "Setting", icon: <MoreHorizontal size={20} />, to: "/setting" },
];

function MenuTab() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 w-full flex justify-center pt-2 pb-5 border-t border-gray-200 bg-white">
      <nav className="w-full max-w-5xl">
        <ul className="flex justify-around w-full text-gray-700">
          {TAB.map((tab, index) => (
            <li key={index}>
              <Link
                to={tab.to}
                className="flex flex-col items-center font-medium w-full"
              >
                {location.pathname === tab.to ? (
                  <span className="text-blue-500">{tab.icon}</span>
                ) : (
                  tab.icon
                )}
                <p
                  className={`text-xs pt-1 ${
                    location.pathname === tab.to ? "text-blue-500" : ""
                  }`}
                >
                  {tab.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuTab;
