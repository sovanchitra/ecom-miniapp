import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

function MenuCard({ data }) {
  return (
    <Link to={`/menu/${data.id}`} state={{ productData: data }}>
      <div className="flex flex-col gap-2 w-full min-h-64 rounded-xl border border-gray-200 hover:shadow-lg p-2 text-gray-700">
        <div className="flex justify-center w-full h-48 relative">
          <img
            src={data.image}
            className="w-full h-full object-contain"
            alt={data.title}
          />
          {/* <div className="absolute top-0 right-0">
            <span className="text-xs bg-green-500/20 border border-green-300 rounded-full font-semibold text-green-600 px-2 py-1">
              Available
            </span>
          </div> */}
        </div>
        <div className="font-medium">
          <p className="truncate">{data.title}</p>
          <div className="flex justify-between">
            <span className="text-xs">
              $<span className="text-base font-semibold">{data.price}</span>{" "}
              <span className="text-xs text-gray-500 line-through">$200</span>
            </span>
            <button className="">
              <PlusCircle size={22} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;
