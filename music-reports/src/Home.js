import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import "./TableData.css";
import { Card, Input } from "semantic-ui-react";
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
      <Input
        className="searchBar"
        label="Search Products"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />

      <div className="data">
        <Card.Group itemsPerRow={4} style={{ marginTop: 20 }}>
          {searchInput.length > 1
            ? filteredResults.map((item) => {
                return (
                  <Card>
                    <Card.Content>
                      <Card.Header>Title: {item.title}</Card.Header>
                      <Card.Description>: {item.price}</Card.Description>
                      <Card.Description>id: {item.id}</Card.Description>
                      <Card.Description>stock: {item.stock}</Card.Description>
                    </Card.Content>
                  </Card>
                );
              })
            : data.map((item) => {
                return (
                  <Card>
                    <Card.Content>
                      <Card.Header>Title: {item.title}</Card.Header>
                      <Card.Description>Price: {item.price}</Card.Description>
                      <Card.Description>id: {item.id}</Card.Description>
                      <Card.Description>stock: {item.stock}</Card.Description>
                    </Card.Content>
                  </Card>
                );
              })}
          <VSpacer factor={2} />
          <button
            className="button"
            onClick={() => navigate("/products-page-2")}
          >
            products page 2
          </button>
          <VSpacer factor={2} />
        </Card.Group>
      </div>
    </div>
  );
}

export default Home;
