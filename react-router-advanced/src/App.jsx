import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/ Profile";
import BlogPost from "./components/BlogPost";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/blog/:id" element={<BlogPost />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
