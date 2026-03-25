import React from "react";
import { Home, Search, User, UserPlus, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const sidebarLinks = [
  { label: "Home", path: "/app/home", icon: Home },
  { label: "Follow", path: "/app/follow", icon: UserPlus },
  { label: "Profile", path: "/app/profile", icon: User },
  { label: "Explore", path: "/app/explore", icon: Search },
];

function Mobilebar() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="border-t border-[#2f3336] w-full z-10 text-white flex sticky bottom-0 bg-black/80 backdrop-blur-md px-2 lg:hidden py-3">
        <nav className="flex justify-between w-full items-center">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-full text-lg transition
                   hover:bg-[#181818] hover:text-white
                   ${isActive ? "font-bold text-white" : "font-normal text-gray-400"}`
                }
              >
                <Icon size={24} />
              </NavLink>
            );
          })}

          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 rounded-full text-gray-400 hover:bg-[#181818] hover:text-red-400 transition"
          >
            <LogOut size={24} />
          </button>
        </nav>
      </div>
    </>
  );
}

export default Mobilebar;
