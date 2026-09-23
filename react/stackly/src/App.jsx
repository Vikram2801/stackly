import { useState } from "react";
import Login from "./components/login/login";
import Home from "./components/home/home";
import "./App.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTask, setSelectedTask] = useState("task1");

  // Static login credentials
  const validUsername = "vikram";
  const validPassword = "12345";

  // Login
  const handleLogin = (username, password) => {
    if (
      username === validUsername &&
      password === validPassword
    ) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedTask("task1");
  };
  
  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login
          onLogin={handleLogin}
        />
      ) : (
        <Home
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
export default App;