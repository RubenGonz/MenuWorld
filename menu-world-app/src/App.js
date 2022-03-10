import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="page-not-found" element={<NoPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));