import React from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const ProfileDetails = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}>
          <ProtectedRoute>
            <Route path="/details" element={<ProfileDetails />} />
          </ProtectedRoute>
          <Route path="/details" element={<ProfileDetails />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProfileDetails;
