import { Languages, Search } from "lucide-react";
import ActionButton from "./ActionButton";

function Navbar() {
  return (
    <div className="flex justify-center p-2 border-b border-gray-200">
      <nav className="flex justify-between items-center max-w-5xl w-full">
        <h1>Logo</h1>
        <div className="flex gap-2">
          <ActionButton action={() => {}}>
            <Search size={18} />
          </ActionButton>
          <ActionButton action={() => {}}>
            <Languages size={18} />
          </ActionButton>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
