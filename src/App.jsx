import HtmlDocs from "./Pages/HtmlDocs";
import Compiler from "./Pages/Python"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HtmlDocs />} />
        <Route path="/interpreter" element={<Compiler/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
