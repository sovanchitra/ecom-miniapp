import React from "react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <p className="text-3xl">Homepage</p>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default HomePage;
