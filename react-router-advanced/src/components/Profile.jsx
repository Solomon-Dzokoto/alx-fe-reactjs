import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ProtectedRoute>
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
      </ProtectedRoute>
    </div>
  );
};

export default Profile;
