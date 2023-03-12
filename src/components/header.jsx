const Header = ({ title }) => {
  return (
    <header className="header sm:w-3/4 w-4/5 lg:w-3/5 h-32 sm:h-40 lg:h-48 xl:h-52">
      <div className="background flex  items-end p-4 pb-0 rounded-t-lg h-20 sm:h-28 lg:h-32 xl:h-36 w-full"></div>
      <h1
        className="text-3xl p-1.5 pl-3 lg:text-4xl xl:text-5xl
            w-full bg-gray-800 text-white  h-2/5 flex"
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
