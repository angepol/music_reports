import "./SearchPage.css";
import { MyContext } from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TableData from "./TableData";
import VSpacer from "./VSpacer";

function SearchPageOne() {
  const searchValue = useContext(MyContext);
  console.log({ searchValue });
  const navigate = useNavigate();
  return (
    <div className="SearchPageWrapper">
      <MyContext.Provider value={{ searchValue }}>
        <TableData />
        <VSpacer factor={2} />
        <button className="button" onClick={() => navigate("/search-page-two")}>
          products page 2
        </button>
        <VSpacer factor={2} />
      </MyContext.Provider>
    </div>
  );
}

export default SearchPageOne;
