import { createContext, useContext, useReducer } from "react";

export const AuthGainer = createContext();

export const AuthGaurd = ({ initialState, reducers, children }) => (
  <>
    {/* {console.log(initialState, reducers, children,"..............")} */}
    <AuthGainer.Provider value={useReducer(reducers, initialState)}>
      {children}
    </AuthGainer.Provider>
  </>
);

export default AuthGaurd;

export const useStateValue = () => useContext(AuthGainer);
