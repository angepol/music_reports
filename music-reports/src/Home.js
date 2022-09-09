import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import "./TableData.css";
import "./TableData.css";
import VSpacer from "./VSpacer";

function Home() {
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
        label="Search Products"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />

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
        <button className="button" onClick={() => navigate("/products-page-2")}>
          products page 1
        </button>
      </div>
    </div>
  );
}

export default Home;
