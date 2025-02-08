import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home";
import Events from "./Event/Event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
    {/* <Home /> */}
  </>
);
export default App;
