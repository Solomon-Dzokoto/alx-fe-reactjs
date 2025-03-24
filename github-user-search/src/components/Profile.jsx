import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>    
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
    </div>
  );
};

export default Profile;
