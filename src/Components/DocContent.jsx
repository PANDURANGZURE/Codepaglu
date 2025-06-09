import docs from "../data/docs";

export default function DocContent({ selectedId }) {
  const doc = docs.find((d) => d.id === selectedId);
  if (!doc) return <p className="text-white">Select a topic</p>;

  return (
    <div className="p-6 text-white md:mt-10 ">
      <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
      <div>
        {doc.content }
      </div>
    </div>
  );
}
