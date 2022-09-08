import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableData from "./TableData";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table-data" element={<TableData />} />
      </Routes>
    </Router>
  );
}

export default App;
