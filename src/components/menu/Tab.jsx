import { useState } from "react";

function Tab({ category, brand }) {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="flex justify-between gap-2 p-1 border border-gray-200 rounded-full text-sm font-semibold">
        <button
          onClick={() => {
            setTab(1);
          }}
          className={`${
            tab === 1 ? "bg-blue-500 rounded-full p-2 text-white" : ""
          } w-full cursor-pointer`}
        >
          Category
        </button>
        <button
          onClick={() => {
            setTab(2);
          }}
          className={`${
            tab === 2 ? "bg-blue-500 rounded-full p-2 text-white" : ""
          } w-full cursor-pointer`}
        >
          Brand
        </button>
      </div>
      {tab === 1 ? <p>c</p> : <p>c</p>}
    </div>
  );
}

export default Tab;
