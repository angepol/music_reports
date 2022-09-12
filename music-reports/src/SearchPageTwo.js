import "./SearchPage.css";
import { MyContext } from "./Context";
import { useContext } from "react";
import TableData from "./TableData";
import VSpacer from "./VSpacer";
import { useNavigate } from "react-router-dom";

function SearchPageTwo() {
  const searchValue = useContext(MyContext);
  console.log({ searchValue });
  const navigate = useNavigate();
  return (
    <div className="SearchPageWrapper">
      <MyContext.Provider value={{ searchValue }}>
        <TableData />
        <VSpacer factor={2} />
        <button className="button" onClick={() => navigate("/")}>
          products page 1
        </button>
        <VSpacer factor={2} />
      </MyContext.Provider>
    </div>
  );
}

export default SearchPageTwo;
