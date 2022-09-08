import "./Home.css";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      Home page!
      <VSpacer factor={4} />
      <button className="button" onClick={() => navigate("/table-data")}>
        Data
      </button>
    </div>
  );
}

export default Home;
