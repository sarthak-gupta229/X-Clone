import { createContext,useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const [user,setUser]=useState(null);
    const login =((username,password)=>{
        if(password[0] === "@"){
            setUser({ username, password });
            return true
        }
        return false
    })
    const logout = () => {
    setUser(null);
    };
    return (
          
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  
    );

}
