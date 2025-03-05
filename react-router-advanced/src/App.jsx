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
          <Route path="/" element={<Profile />}>
            <ProtectedRoute>
              <Route path="/details" element={<ProfileDetails />} />
            </ProtectedRoute>
            <Route path="/details" element={<ProfileDetails />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
