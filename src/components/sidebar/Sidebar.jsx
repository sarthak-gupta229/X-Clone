import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  UserPlus,
} from "lucide-react";

const sidebarLinks = [
  {
    label: "Home",
    path: "/app/home",
    icon: Home,
  },
  {
    label: "Follow",
    path: "/app/follow",
    icon: UserPlus,
  },

  //   {
  //     label: "Messages",
  //     path: "/messages",
  //     icon: Mail,
  //   },

  {
    label: "Profile",
    path: "/app/profile",
    icon: User,
  },
  {
    label: "Explore",
    path: "/app/explore",
    icon: Search,
  },
];

function Sidebar() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handlelogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="hidden lg:block h-screen px-30 py-2 w-[400px] bg-black border-r border-black border-r-[#2f3336] flex flex-col border box-border">
      <div className="p-3 mb-4 rounded-full hover:bg-[#181818] w-fit cursor-pointer invert hover:invert-0">
        <img
          src="/logos/x-logo.png "
          alt="Twitter"
          className="w-7 h-7 object-contain "
        ></img>
      </div>

      <div>
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-full text-lg transition
                        hover:bg-[#181818] hover:text-white
                        ${isActive ? "font-bold" : "font-normal"}`
                }
              >
                <Icon size={24} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-10 ml-5">
        <NavLink
          to="/app/home"
          className="mt-10 bg-white text-black py-3 px-14 rounded-full font-bold text-lg hover:bg-gray-200 transition"
        >
          Post
        </NavLink>
      </div>
      <div className="mt-10 ml-5 absolute bottom-10">
        <button
          className="mt-10 bg-white text-black py-3 px-10 rounded-full font-bold text-lg hover:bg-gray-200 transition cursor-pointer"
          onClick={handlelogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
