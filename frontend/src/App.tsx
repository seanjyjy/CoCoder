import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import { UserContext } from './hooks/UserContext';
import LoginPage from './components/LoginPage';
import { RequireAuth, RoutePath } from './services/RoutingService';
import useTokenLogin from './hooks/useTokenLogin';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#474DD9',
      main: '#474DD9',
      dark: '#4347cb',
    },
  },
});

function App() {
  const { user, setUser, isLoading } = useTokenLogin();
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
