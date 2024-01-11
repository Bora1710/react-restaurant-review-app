import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Restaurants from "./components/Restaurants/Restaurants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
