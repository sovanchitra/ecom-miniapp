import { useNavigate } from "react-router";

function NavButton({ to, children }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="bg-gray-500/10 hover:bg-gray-500/20 p-2 rounded-full cursor-pointer"
    >
      {children}
    </button>
  );
}

export default NavButton;
