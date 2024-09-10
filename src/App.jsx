import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeMain from "./components/HomeMain";

import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </Router>
    );
}

export default App;
