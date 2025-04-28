import React from "react";
import NavHeader from "../common/NavHeader";
import ActionButton from "../common/ActionButton";
import { Share } from "lucide-react";

function MenuDetailNavHeader() {
  return (
    <NavHeader to={-1}>
      <ActionButton action={() => {}}>
        <Share className="w-6 h-5" />
      </ActionButton>
    </NavHeader>
  );
}

export default MenuDetailNavHeader;
