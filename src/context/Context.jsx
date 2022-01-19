import { useReducer, createContext, useContext } from "react";

import { reducer, User } from "./reducer";

const UserCtx = createContext();

export const useAuthCtx = () => useContext(UserCtx);

export const Context = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, User);

  return (
    <UserAuthCtx.Provider value={{ UserAuth: user, LogUser: dispatch }}>
      {children}
    </UserAuthCtx.Provider>
  );
}