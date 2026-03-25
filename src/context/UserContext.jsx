import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("xclone_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [posts, setPosts] = useState([]);
  const [following, setfollowing] = useState(0);
  const [follow, setFollow] = useState([]);
  const [userpost, setUserpost] = useState([]);
  const [userfollowing, setUserfollowing] = useState([]);

  const signup = (username, password) => {
    const users = JSON.parse(localStorage.getItem("xclone_users") || "{}");
    if (users[username]) {
      return { success: false, message: "Username already exists." };
    }
    users[username] = { username, password };
    localStorage.setItem("xclone_users", JSON.stringify(users));

    const loggedInUser = { username };
    localStorage.setItem("xclone_current_user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    return { success: true };
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("xclone_users") || "{}");
    const found = users[username];
    if (found && found.password === password) {
      const loggedInUser = { username };
      localStorage.setItem("xclone_current_user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      return { success: true };
    }
    return { success: false, message: "Invalid username or password." };
  };

  const logout = () => {
    localStorage.removeItem("xclone_current_user");
    setUser(null);
    setPosts([]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        posts,
        setPosts,
        following,
        setfollowing,
        follow,
        setFollow,
        userpost,
        setUserpost,
        userfollowing,
        setUserfollowing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
