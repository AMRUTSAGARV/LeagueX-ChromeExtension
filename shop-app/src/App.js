import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
