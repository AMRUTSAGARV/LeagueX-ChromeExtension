import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
