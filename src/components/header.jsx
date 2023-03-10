const Header = ({ title }) => {
  return (
    <header className="w-4/5 h-36 aspect-video">
      <div className="background flex  items-end p-4 pb-0 rounded-t-lg h-24 w-full"></div>
      <h1
        className="text-3xl p-1.5 pl-3
            w-full bg-gray-800 text-white font-semibold"
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
