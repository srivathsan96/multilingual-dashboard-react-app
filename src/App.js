import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NewProject from "./pages/newProject/NewProject";
import Projects from "./pages/projects/Projects";
import Search from "./pages/search/Search";
import Reports from "./pages/reports/Reports";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="newProject">
              <Route index element={<NewProject />} />
            </Route>
            <Route path="allProjects">
              <Route index element={<Projects />} />
            </Route>
            <Route path="search">
              <Route index element={<Search />} />
            </Route>
            <Route path="reports">
              <Route index element={<Reports />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
