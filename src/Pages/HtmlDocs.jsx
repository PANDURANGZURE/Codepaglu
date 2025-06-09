import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import DocContent from "../Components/DocContent";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Editor from "@monaco-editor/react";
import { Menu, X } from "lucide-react"; // Optional: use any icon library

function HtmlDocs() {
  const [selectedId, setSelectedId] = useState("intro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // toggle state

  return (
    <>
      <div className="fixed w-full z-10 ">
        <Header />
      </div>

      {/* Mobile toggle button */}
      <div className="md:hidden bg-black px-4 py-3 flex justify-between items-cente">
        <span className="text-white font-bold text-lg">Docs</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white focus:outline-none"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row bg-[#050505] min-h-screen ">
        {/* Sidebar */}
        <aside
          className={`
            bg-[#050505]  shadow-amber-50 text-white md:block 
            ${isSidebarOpen ? "block" : "hidden"} 
            w-full md:w-1/4 lg:w-1/5
            absolute md:static z-20 md:z-0
          `}
        >
          <Sidebar
          
            onSelect={(id) => {
              setSelectedId(id);
              setIsSidebarOpen(false); // auto close on mobile
            }}
            selectedId={selectedId}
          />
        </aside>

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-8 overflow-auto bg-black">
          <DocContent selectedId={selectedId} />
        </main>
      </div>

      <div className="z-50">
        <Footer />
      </div>
    </>
  );
}

export default HtmlDocs;
