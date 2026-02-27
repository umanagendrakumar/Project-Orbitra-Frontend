import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../utils/axios';
import { clearUser } from '../store/userSlice';
import { clearJobApplications } from '../store/jobAppSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        const logout = window.confirm("Are you sure you want to leave Orbitra?");
        if (!logout) return;
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
        <button
            onClick={handleSignOut}
            className="text-sm text-left font-medium text-red-500 cursor-pointer hover:text-red-700 transition"
        >
            Leave Orbit
        </button>
    )
}

export default Logout