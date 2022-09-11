import { createContext, useState } from "react";

export const MyContext = createContext();
// should the default state be set to something?
export const ContextProvider = ({ children }) => {
  // const [filteredResults, setFilteredResults] = useState({
  //   title: "iPhone 9",
  //   id: 1,
  //   price: 549,
  //   stock: 94,
  // });
  const [filteredResults, setFilteredResults] = useState([]);
  return (
    <MyContext.Provider value={[filteredResults, setFilteredResults]}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

//  All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
