import TableData from "./TableData";
import VSpacer from "./VSpacer";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

function SearchPageOne() {
  const navigate = useNavigate();
  return (
    <div className="SearchPageWrapper">
      <TableData />
      <VSpacer factor={2} />
      <button className="button" onClick={() => navigate("/search-page-two")}>
        products page 2
      </button>
      <VSpacer factor={2} />
    </div>
  );
}

export default SearchPageOne;
