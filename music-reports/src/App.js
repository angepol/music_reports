import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableData from "./TableData";
import TableData1 from "./TableData1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableData1 />} />
        <Route path="/products-page-2" element={<TableData />} />
      </Routes>
    </Router>
  );
}

export default App;
