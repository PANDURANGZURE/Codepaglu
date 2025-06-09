import docs from "../data/docs";

export default function Sidebar({ onSelect, selectedId }) {
  return (
    <div className="w-64 bg-[#050505] text-white h-screen p-4  md:mt-16 fixed -z-10">
      <h2 className="text-2xl font-bold mb-4">Documentation</h2>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li
            key={doc.id}
            onClick={() => onSelect(doc.id)}
            className={`cursor-pointer hover:text-purple-400 ${
              selectedId === doc.id ? "text-purple-500" : ""
            }`}
          >
            {doc.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
