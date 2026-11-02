// src/App.jsx
import LoginPage from "./components/auth/LoginPage";
import { useAuth } from "./hooks/useAuth";
import Pos from "./Pos";

function App() {
  const { user, checking, login, logout } = useAuth();

  if (checking) return null; // atau spinner
  if (!user) return <LoginPage onLogin={login} />;
  return <Pos user={user} onLogout={logout} />;
}
export default App;
