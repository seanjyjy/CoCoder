import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import { Box } from '@mui/material';
import { UserContext } from './hooks/UserContext';
import LoginPage from './components/LoginPage';
import { RequireAuth, RoutePath } from './services/RoutingService';
import useTokenLogin from './hooks/useTokenLogin';
import NavBar from './components/NavBar';

function App() {
  const { user, setUser, isLoading } = useTokenLogin();
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Box display={'flex'} flexDirection={'column'} padding={'4rem'}>
          <Router>
            <NavBar />
            <Routes>
              <Route path={RoutePath.BASE} element={<Navigate replace to={RoutePath.SIGNUP} />} />
              <Route path={RoutePath.SIGNUP} element={<SignupPage />} />
              <Route path={RoutePath.LOGIN} element={<LoginPage />} />
              <Route
                path={RoutePath.HOME}
                element={
                  <RequireAuth>
                    <div>Home</div>
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </Box>
      </UserContext.Provider>
    </div>
  );
}

export default App;
