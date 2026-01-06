const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 z-20"
    ></div>
  );
};

export default Overlay;
