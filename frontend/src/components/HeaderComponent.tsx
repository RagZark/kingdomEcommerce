import React from "react";

function HeaderComponent() {
  let ancorStyle =
    "hover:bg-sky-300 rounded-lg hover:text-white ease-in-out duration-300 p-1";

  return (
    <nav className="flex justify-between items-center w-full h-10 bg-blue-800 pl-10 pr-10">
      <img src="" alt="no-image" />
      <ul className="flex w-100 justify-between text-yellow-200">
        <a className={ancorStyle} href="#">
          Home
        </a>
        <a className={ancorStyle} href="#">
          Products
        </a>
        <a className={ancorStyle} href="#">
          History
        </a>
        <a className={ancorStyle} href="#">
          About Me
        </a>
      </ul>
    </nav>
  );
}

export default HeaderComponent;
