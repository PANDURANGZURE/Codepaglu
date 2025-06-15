import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HtmlDocs from "./Pages/HtmlDocs";
import Compiler from "./Pages/Python";
import Home from "./Pages/Home";
import Html from './Pages/Html';
import About from "./Pages/About";
import Loader from "./Components/Loader";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      
      <div className={`${loading ? 'overflow-hidden h-screen' : ''}`}>
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interpreter" element={<Compiler />} />
            <Route path="/Compiler" element={<Html />} />
            <Route path="/Docs" element={<HtmlDocs />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
