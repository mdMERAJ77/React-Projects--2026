import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mx-10 mt-5">
        <h2 className="text-3xl">Logo</h2>
        <div className="flex gap-7 items-center max-[720px]:hidden">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Service</a>
          <a href="">Help</a>
        </div>

        <div className="flex items-center gap-3">
          <button>Shopping</button>
          <CiMenuBurger
            onClick={() => setShowMenu((prev) => !prev)}
            className="min-[720px]:hidden"
            size={30}
          />
        </div>
        {/**mobile */}
        {showMenu && (
          <div className={`absolute flex flex-col  bg-black h-screen top-0 left-0 gap-3 pt-20 w-[20rem]`}>
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="absolute top-5 right-5"
            >
              close
            </button>
            <a
              href=""
              className="hover:bg-[#161414] p-2 flex justify-center items-center"
            >
              Home
            </a>
            <a
              href=""
              className="hover:bg-[#161414] p-2 flex justify-center items-center"
            >
              About
            </a>
            <a
              href=""
              className="hover:bg-[#161414] p-2 flex justify-center items-center"
            >
              Contact
            </a>
            <a
              href=""
              className="hover:bg-[#161414] p-2 flex justify-center items-center"
            >
              Service
            </a>
            <a
              href=""
              className="hover:bg-[#161414] p-2 flex justify-center items-center"
            >
              Help
            </a>
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;
