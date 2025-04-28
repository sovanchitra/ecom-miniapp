import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuDetailNavHeader from "../../components/menu/MenuDetailNavHeader";
import { Heart } from "lucide-react";

function MenuDetailPage() {
  const location = useLocation();
  const product = location.state?.productData;

  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);

  if (!product) {
    return <p className="text-3xl flex justify-center">No product found</p>;
  }

  const toggleShowMoreDesc = () => setShowMoreDesc((prev) => !prev);
  const toggleShowMoreSpecs = () => setShowMoreSpecs((prev) => !prev);

  return (
    <div className="p-4 space-y-5">
      <MenuDetailNavHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 mb-16 lg:mb-0">
        <div className="xs:order-1 md:order-1 max-h-96">
          <img
            src={product.image}
            className="w-full h-full object-contain rounded-2xl"
            alt={product.title}
          />
        </div>
        <div className="xs:order-1 md:order-2">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-1 text-2xl font-bold">
              <p className="">{product.title}</p>
              <p className="">${product.price}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <p className="text-white text-xs w-fit bg-blue-500 rounded-full font-medium px-2 py-1">
                {product.category}
              </p>
              <p className="text-white text-xs w-fit bg-blue-500 rounded-full font-medium px-2 py-1">
                Adult
              </p>
              <p className="text-white text-xs w-fit bg-blue-500 rounded-full font-medium px-2 py-1">
                Casual
              </p>
              <p className="text-white text-xs w-fit bg-blue-500 rounded-full font-medium px-2 py-1">
                T-Shirt
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="font-semibold">Status</p>
              <p className="text-green-500">Available</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-semibold">Color</p>
              <p>Red</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Description</p>
              <span className="">
                {showMoreDesc
                  ? product.description
                  : `${product.description.substring(0, 150)}...`}
              </span>
              <button
                className="text-blue-500 font-semibold text-sm"
                onClick={toggleShowMoreDesc}
              >
                {showMoreDesc ? "Less" : "More"}
              </button>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Specification</p>
              <span className="">
                {showMoreSpecs
                  ? product.description
                  : `${product.description.substring(0, 150)}...`}
              </span>
              <button
                className="text-blue-500 font-semibold text-sm"
                onClick={toggleShowMoreSpecs}
              >
                {showMoreSpecs ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-4 py-2 gap-2 fixed bottom-2 left-0 right-0 max-w-[1024px] mx-auto">
        <button className="text-white flex-1 cursor-pointer bg-blue-500 font-semibold p-3 rounded-xl">
          <div className="flex justify-between">
            <p>${product.price}</p>
            <p>Add to Cart</p>
          </div>
        </button>
        <button className="text-white cursor-pointer bg-blue-500 font-semibold p-3 rounded-xl">
          <Heart />
        </button>
      </div>
    </div>
  );
}

export default MenuDetailPage;
