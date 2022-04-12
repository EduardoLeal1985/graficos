import React, { createContext, useState, useContext, useEffect } from "react";

import useApi from "../hooks/useApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  const [intervals, setIntervals] = useState([]);

  const [user, setUser] = useState(() => {
    const userStorage = localStorage.getItem(
      `[@${process.env.REACT_APP_NAME}User]`
    );

    if (userStorage) {
      return JSON.parse(userStorage);
    }

    return null;
  });
  const [token, setToken] = useState(() => {
    const tokenStorage = localStorage.getItem(
      `[@${process.env.REACT_APP_NAME}Token]`
    );

    if (tokenStorage) {
      return tokenStorage;
    }

    return null;
  });

  useEffect(() => {
    if (update) {
      console.log(user);
    }
    setUpdate(true);
  }, [user, update]);


  // const sessionLogin = () => {
  //   setUser('userTest');
  //   setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6ImlkMSJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuc2ltdWxhZG9zLnNlLXBtbWMuY29tLmJyXC92MiIsImF1ZCI6InNpbXVsYWRvcyIsImp0aSI6ImlkMSIsImlhdCI6MTY0ODk5NTYzMiwibmJmIjoxNjQ4OTk1NjMyLCJleHAiOjE2NDkwMTM2MzIsInVzZXJJZCI6LTEyLCJ1c2VyRm9sZGVyIjoiYWx1bm9cLyJ9.8gCYHLwbsiY8WMOgH7brgNgGEg4VsP317ec9xTtPTvo');
  //   localStorage.setItem(
  //     `[@${process.env.REACT_APP_NAME}User]`,
  //     JSON.stringify(user)
  //   );
  //   localStorage.setItem(`[@${process.env.REACT_APP_NAME}Token]`, token);
  // }
  const [sessionLogin, sessionLoginInfo] = useApi({
    debounceDelay: 0,
    url: "login/",
    method: "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log(response);
        const navigate = response.config.navigate;
        const { username, token } = response.data;
        setUser(username);
        setToken(token);
        localStorage.setItem(
          `[@${process.env.REACT_APP_NAME}User]`,
          JSON.stringify(username)
        );
        // localStorage.setItem(
        //   `[@${process.env.REACT_APP_NAME}School]`,
        //   JSON.stringify(schoolname)
        // );
        localStorage.setItem(`[@${process.env.REACT_APP_NAME}Token]`, token);
        navigate(`lista`);
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const [sessionLogout, sessionLogoutInfo] = useApi({
    debounceDelay: 0,
    url: "logout/",
    method: "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log(response);
        const navigate = response.config.navigate;
        localStorage.removeItem(`[@${process.env.REACT_APP_NAME}User]`);
        localStorage.removeItem(`[@${process.env.REACT_APP_NAME}Token]`);
        navigate.push(`/`);
      }
    },
  });

  const login = ({ username, password, navigate }) => {
    // fazer aqui a chamada para a api e se sucesso setar o token no local storage
    console.log(username);
    sessionLogin({
      data: {
        user: username,
        password,
      },
      navigate,
    });
  };

  const logout = ({ navigate }) => {
    // fazer aqui a blacklist do token via api e remover o token do localstorage, caso ele exista
    sessionLogout({
      navigate,
    });
  };

  const updateUser = (user) => {
    localStorage.setItem(
      `[@${process.env.REACT_APP_NAME}User]`,
      JSON.stringify(user)
    );
    setUser(user);
  };

  const clearIntervals = () => {
    if (intervals.length > 0) {
      intervals.map((item) => {
        return clearInterval(item);
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        intervals,
        // sessionLoginInfo,
        sessionLogoutInfo,
        login,
        logout,
        updateUser,
        setIntervals,
        clearIntervals,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Must be used within a provider.");
  }

  return context;
};
