import { useEffect, useState } from "react";
import MenuCard from "../../components/menu/MenuCard";
import { Phone, Tablet } from "lucide-react";
import Tab from "../../components/menu/Tab";

const CATEGORY = [
  { name: "Mobile Phone", icon: <Phone /> },
  { name: "Tablet", icon: <Tablet /> },
];

const BRAND = [
  { name: "Apple", icon: <Phone /> },
  { name: "Samsung", icon: <Tablet /> },
];

function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (!product) {
    return <p className="text-3xl flex justify-center">Loading...</p>;
  }

  return (
    <div className="p-3 space-y-3">
      <Tab category={CATEGORY} brand={BRAND} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3 w-full">
        {product.map((product) => (
          <MenuCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
