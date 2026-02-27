import { useSelector } from "react-redux";
import Logout from "./Logout";
import { useState } from "react";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <nav className="sm:px-8 px-4 py-4 shadow-sm bg-white flex justify-between items-center">
      <h1 className="text-3xl font-bold text-purple-600">Orbitra</h1>
      {
        <div className="relative">
        {user &&
          <button
            className="text-2xl cursor-pointer p-2"
            onClick={() => setProfileVisible(!profileVisible)}
          >
            {profileVisible ? <RiMenuUnfold2Line /> : <RiMenuUnfoldLine />}
          </button>
        }

          <div
            className={`absolute right-0 mt-2 bg-white shadow-md flex flex-col text-left p-4 z-50 ${profileVisible ? "block" : "hidden"
              }`}
          >
            <h1 className="font-semibold">
              {user?.lastName} {user?.firstName}
            </h1>
            <h1 className="text-sm text-gray-500 mb-4">
              {user?.email}
            </h1>
            <Logout />
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;