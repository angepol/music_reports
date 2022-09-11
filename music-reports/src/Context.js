import { createContext, useState } from "react";

export const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  return (
    <MyContext.Provider value={[filteredResults, setFilteredResults]}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
