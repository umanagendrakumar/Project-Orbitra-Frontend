import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JobApplicationDetails from './pages/JobApplicationDetails';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import { use, useEffect } from 'react';
import { setUser } from './store/userSlice';
import { setJobApplications } from './store/jobAppSlice';
import api from './utils/axios';
import JobApplicationCU from './pages/JobApplicationCU';
import { setStatusHistory } from './store/StatusHistorySlice';

const App = () => {
  const dispatch = useDispatch();


  const initializeApp = async () => {
    try {
      const userRes = await api.get("/user");
      dispatch(setUser(userRes.data));

      const jobsRes = await api.get("/job-applications");
      dispatch(setJobApplications(jobsRes.data));

    } catch (error) {
      if (error.response?.status !== 401) {
        console.error("App Initialization Failed", error.response?.data);
      }
    }
  };

  useEffect(() => {
    initializeApp();

  }, []);

  return (
    <AppRouter />
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/orbit' element={<HomePage />} />
        <Route path='/job-application/post' element={<JobApplicationCU isEdit={false} />} />
        <Route path='/job-application/patch/:jobId' element={<JobApplicationCU isEdit={true} />} />
        <Route path='/job-application/get/:jobId' element={<JobApplicationDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
