import { ChevronLeft } from "lucide-react";
import NavButton from "./NavButton";

function NavHeader({ to, children }) {
  return (
    <div className="">
      <div className="flex justify-between">
        <NavButton to={to}>
          <ChevronLeft />
        </NavButton>
        {children}
      </div>
    </div>
  );
}

export default NavHeader;
