import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyContext from "./Context";
import SearchPageOne from "./SearchPageOne";
import SearchPageTwo from "./SearchPageTwo";

function App() {
  return (
    <MyContext.Provider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPageOne />} />
          <Route path="/search-page-two" element={<SearchPageTwo />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
