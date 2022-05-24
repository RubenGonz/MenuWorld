import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MenuWorld from "./pages/MenuWorld/MenuWorld";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Recipe from "./pages/Recipe/Recipe";
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/sign_in" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />                
                <Route path="/profile/recipe" element={<Recipe />} />                
                <Route path="/nopage" element={<NoPage />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/" element={<MenuWorld />} />
            </Routes>
        </Router >
    );
}

ReactDOM.render(<App />, document.getElementById("root"));