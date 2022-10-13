import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import NotFound from "./pages/error/NotFound";
import Signup from "./pages/auth/Signup";
import Registration from "./pages/auth/Registration";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/browse" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
