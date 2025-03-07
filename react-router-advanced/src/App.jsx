import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/ Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/blog/:id" element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
