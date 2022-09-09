import "./TableData.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";

function TableData1() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = () => {
    fetch(`https://dummyjson.com/products
    `)
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
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <VSpacer factor={3} />
      <div className="table">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td>Title: {item.title} </td>
                    <td>id: {item.id}</td>
                    <td>price: {item.price}</td>
                    <td>stock: {item.stock}</td>
                  </tr>
                </tbody>
              );
            })
          : data.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td>Title: {item.title} </td>
                    <td>id: {item.id}</td>
                    <td>price: {item.price}</td>
                    <td>stock: {item.stock}</td>
                  </tr>
                </tbody>
              );
            })}

        <VSpacer factor={3} />
        <button className="button" onClick={() => navigate("/products-page-2")}>
          products page 2
        </button>
        <VSpacer />
      </div>
    </div>
  );
}

export default TableData1;
