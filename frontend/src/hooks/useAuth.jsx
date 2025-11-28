import React, { createContext, useContext, useState } from 'react';
import api, { setToken } from '../api/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(null);

  function saveToken(t) {
    _setToken(t);
    setToken(t);
  }

  async function login(email, password) {
    const res = await api.login({ email, password });
    saveToken(res.data.token);
    setUser({ email: res.data.email });
    return res.data;
  }

  function logout() {
    saveToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
