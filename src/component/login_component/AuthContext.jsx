import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // const [token, setToken] = useState(localStorage.setItem("token")||null);
  const [user, setUser] = useState(null);
//  useEffect(()=>{
//    if(token){
//     localStorage.setItem("token", token);

//   }else{
//     localStorage.removeItem("token")
//   }

//  }, [token]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);