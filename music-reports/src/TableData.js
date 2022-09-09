import "./TableData.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";

function TableData() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div className="pageWrapper">
      <input
        className="searchBar"
        label="Search Products"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <VSpacer factor={3} />
      <div className="data">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <tbody>
                  <tr>
                    <th>id: {item.id}</th>
                    <th>Title: {item.title} </th>
                    <th>price: {item.price}</th>
                    <th>stock: {item.stock}</th>
                  </tr>
                </tbody>
              );
            })
          : data.map((item) => {
              return (
                <tbody>
                  <tr>
                    <th>id: {item.id}</th>
                    <th>Title: {item.title} </th>
                    <th>price: {item.price}</th>
                    <th>stock: {item.stock}</th>
                  </tr>
                </tbody>
              );
            })}
        <VSpacer factor={3} />
        <button className="button" onClick={() => navigate("/")}>
          products page 1
        </button>
        <VSpacer />
      </div>
    </div>
  );
}

export default TableData;
