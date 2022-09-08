import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";
import "./TableData.css";

function TableData() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

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

  return (
    <div className="pageWrapper">
      <div className="background">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
          {data.map((item, index) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
        <VSpacer factor={4} />
        <button className="button" onClick={() => navigate("/")}>
          home
        </button>
      </div>
    </div>
  );
}

export default TableData;
