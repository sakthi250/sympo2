import "./App.css";
import Header from "./components/Home/Header";
import Events from "./Event/Event";
import Contact from "./components/Contact";
import About from "./components/About/About";
import New from "./components/new/New";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Router>
        <Header />
        {isLoading && <Loading />}
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<New />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
};
export default App;