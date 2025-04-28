function ActionButton({ action, children }) {
  return (
    <button
      className="bg-gray-500/10 hover:bg-gray-500/20 p-2 rounded-full cursor-pointer"
      onClick={action}
    >
      {children}
    </button>
  );
}

export default ActionButton;
