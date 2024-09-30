const MainName = ({ name }: { name: string }) => {
  return (
    <h2 className="line-clamp-3 w-full break-words font-name text-5xl font-black text-white sm:text-6xl md:text-7xl lg:text-8xl">
      {name}
    </h2>
  );
};

export default MainName;
