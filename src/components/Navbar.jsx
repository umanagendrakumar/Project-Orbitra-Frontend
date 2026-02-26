import { useDispatch, useSelector } from "react-redux";
import api from "../utils/axios";
import { clearUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { clearJobApplications } from "../store/jobAppSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await api.post("/logout");
      dispatch(clearUser());
      dispatch(clearJobApplications());
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.response);
    }
  }

  return (
    <nav className="sm:px-8 px-4 py-4 shadow-sm bg-white flex justify-between">
      <h1 className="text-3xl font-bold text-purple-600">Orbitra</h1>
      {user && (
        <button
          onClick={handleSignOut}
          className=" sm:text-lg text-sm font-medium text-red-500 cursor-pointer hover:text-red-700 transition"
        >
          Leave Orbit
        </button>
      )
      }
    </nav>
  );
};

export default Navbar;