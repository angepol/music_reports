import "./TableData.css";
import { MyContext } from "./Context";
import { useContext, useEffect, useState } from "react";
import VSpacer from "./VSpacer";

function TableData() {
  const searchValue = useContext(MyContext);
  const [filteredResults, setFilteredResults] = useState([]);

  console.log(useContext(searchValue));

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
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
      <VSpacer factor={3} />
      <input
        className="searchBar"
        label="Search Products"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <VSpacer factor={3} />
      <div className="table">
        {searchInput !== ""
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
      </div>
    </div>
  );
}

export default TableData;
