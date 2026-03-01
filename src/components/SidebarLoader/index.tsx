const SidebarLoader = () => {
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-10 bg-[#1a1a1a] rounded-lg" />
      ))}
    </div>
  );
};

export default SidebarLoader;
