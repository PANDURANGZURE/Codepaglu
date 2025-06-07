import React from 'react'
import { useState } from "react";
import Sidebar from '../Components/Sidebar'
import DocContent from '../Components/DocContent'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function HtmlDocs() {
    const [selectedId, setSelectedId] = useState("intro");
  return (
<>
    <Header/>
    <div className="flex bg-gray-800 min-h-screen">
          <Sidebar onSelect={setSelectedId} selectedId={selectedId} />
          <div className="flex-1">
            <DocContent selectedId={selectedId} />
          </div>
        </div>
        <Footer/>
</>
  )
}

export default HtmlDocs