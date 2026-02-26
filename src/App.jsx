import { useDispatch} from 'react-redux';

import './App.css';

import { useEffect } from 'react';
import { setUser } from './store/userSlice';
import { setJobApplications } from './store/jobAppSlice';
import api from './utils/axios';

import AppRouter from './routes/AppRouter';

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

export default App;
