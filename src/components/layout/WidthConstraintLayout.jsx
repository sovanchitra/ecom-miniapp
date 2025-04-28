import { Outlet } from "react-router";

function WidthConstraintLayout() {
  return (
    <div className="max-w-5xl mx-auto bg-white min-h-screen text-gray-700">
      <Outlet />
    </div>
  );
}

export default WidthConstraintLayout;
