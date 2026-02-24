import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../utils/axios';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setError("");
        setLoading(true);

        try {
            const res = await api.post("/register", {
                firstName,
                lastName,
                email,
                password
            })

            dispatch(setUser(res.data));
            navigate("/orbit")
        } catch (error) {
           setError(error.response?.data?.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md bg-white shadow-sm p-8">

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Stop Guessing. Start Tracking.
            </h2>

            <p className="text-sm text-gray-500 text-center mb-6">
                Join Orbitra and start tracking your applications
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* First Name */}
                <div>
                    <label htmlFor="fname" className="text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   focus:border-purple-500 transition"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label htmlFor="lname" className="text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   focus:border-purple-500 transition"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   focus:border-purple-500 transition"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="pw" className="text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="pw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   focus:border-purple-500 transition"
                    />
                </div>

                <div className="text-center text-md text-red-500">
                    {error}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-2 py-2 font-semibold text-white
                 bg-linear-to-r from-purple-600 to-blue-600
                 hover:from-purple-700 hover:to-blue-700
                 transition duration-200 shadow-md cursor-pointer"
                >
                    {loading ? "Creating Account..." : "Create My Space"}
                </button>

            </form>

            <div className="mt-6 text-center text-sm">
                <span className="text-gray-500">Already joined Orbitra? </span>
                <Link
                    to="/login"
                    className="font-medium text-purple-600 hover:underline"
                >
                    Let's Go back
                </Link>
            </div>

        </div>

    )
}

export default RegisterForm;