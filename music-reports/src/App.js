import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPageOne from "./SearchPageOne";
import SearchPageTwo from "./SearchPageTwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPageOne />} />
        <Route path="/search-page-two" element={<SearchPageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
