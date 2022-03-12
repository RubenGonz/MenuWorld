import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/nopage" element={<NoPage />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router >
    );
}

ReactDOM.render(<App />, document.getElementById("root"));