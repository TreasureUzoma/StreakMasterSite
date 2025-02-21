import HomeMain from "./pages/HomeMain";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
