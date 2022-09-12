import { createContext, useState } from "react";

export const MyContext = createContext({
  searchValue: "initial value",
  setSearchValue: () => {},
});
// export const ContextProvider = ({ children }) => {
//   const [searchValue, setSearchValue] = useState([]);
//   return (
//     <MyContext.Provider value={{ searchValue, setSearchValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

export default MyContext;
