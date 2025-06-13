import docs from "../data/docs";
import { Link } from "react-router-dom";

export default function Sidebar({ onSelect, selectedId }) {
  return (
    <div className="w-64 bg-[#050505] text-white min-h-screen p-4  md:mt-16 absolute -z-10">
      <h2 className="text-2xl font-bold mb-4">Documentation</h2>
      <ul className="space-y-2">
        
        {docs.map((doc) => (
          <li
            key={doc.id}
            onClick={() => onSelect(doc.id)}
            className={`cursor-pointer hover:text-cyan-200 ${
              selectedId === doc.id ? "text-cyan-200 font-bold " : ""
            }`}
          >
            {doc.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
