import "./SearchPage.css";
import TableData from "./TableData";
import VSpacer from "./VSpacer";
import { useNavigate } from "react-router-dom";

function SearchPageTwo() {
  const navigate = useNavigate();
  return (
    <div className="SearchPageWrapper">
      <TableData />
      <VSpacer factor={2} />
      <button className="button" onClick={() => navigate("/")}>
        products page 1
      </button>
      <VSpacer factor={2} />
    </div>
  );
}

export default SearchPageTwo;
