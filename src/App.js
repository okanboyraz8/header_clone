import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
