import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  return (
    <div>
      <Routes>
        <ProtectedRoute>
          <Route path="/" element={<Profile />}>
            <Route path="/details" element={<ProfileDetails />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Route>
        </ProtectedRoute>
      </Routes>
    </div>
  );
};

export default Profile;
