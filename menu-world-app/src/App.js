import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
    return (
        <Router>
            <Header />
            <hr />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/nopage" element={<NoPage />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router >
    );
}

ReactDOM.render(<App />, document.getElementById("root"));