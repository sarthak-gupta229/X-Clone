import { createContext,useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const [user,setUser]=useState(null);
    const [posts, setPosts] = useState([]);
    const [following,setfollowing]=useState(0)
    const login =((username,password)=>{
        if(password[0] === "@"){
            setUser({ username, password });
            return true
        }
        return false
    })
    const logout = () => {
    setUser(null);
    setPosts([]); 
    };
    return (
          
    <UserContext.Provider value={{ user, login, logout,posts,setPosts,following,setfollowing }}>
      {children}
    </UserContext.Provider>
  
    );

}
