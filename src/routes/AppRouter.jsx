import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import JobApplicationCU from "../pages/JobApplicationCU";
import JobApplicationDetails from "../pages/JobApplicationDetails";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path="/orbit" element={<HomePage />} />
                    <Route path="/job-application/post" element={<JobApplicationCU isEdit={false} />} />
                    <Route path="/job-application/patch/:jobId" element={<JobApplicationCU isEdit={true} />} />
                    <Route path="/job-application/get/:jobId" element={<JobApplicationDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;