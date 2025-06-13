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
        <hr className=" border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
      </div>

      {/* Mobile toggle button */}
      <div className="md:hidden bg-black pt-20 px-4 py-3 flex justify-between items-center ">
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
            w-full md:w-1/2 lg:w-1/6
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
        <div
  className="min-h-screen w-16 bg-black relative hidden md:block"
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
  }}
></div>

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-8 overflow-auto bg-black">
          <DocContent selectedId={selectedId} />
        </main>
      </div>

      
    </>
  );
}

export default HtmlDocs;
