import React from "react";
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
import { NavLink } from "react-router-dom";
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

function Mobilebar() {
  return (
    <>
      <div className="border-1 border-[#2f3336] w-full z-10 text-white flex sticky bottom-0  bg-black/80 backdrop-blur-md px-2 lg:hidden py-3">
        <nav className="flex  justify-between w-full">
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
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Mobilebar;
