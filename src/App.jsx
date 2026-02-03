import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Follow from "./components/follow/follow";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
