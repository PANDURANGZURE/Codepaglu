import HtmlDocs from "./Pages/HtmlDocs";
import Compiler from "./Pages/Python"
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Html from './Pages/Html'
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/interpreter" element={<Compiler/>}></Route>
        <Route path="/Compiler" element={<Html/>}/>
        <Route path="/Docs" element={<HtmlDocs />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
