import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Follow from "./pages/Follow";
import Profile from "./pages/Profile";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} /> 
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path='/app' element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="follow" element={<Follow />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
