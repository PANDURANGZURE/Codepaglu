import { useEffect, useState } from "react";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("print('Hello, World!')");
  const [output, setOutput] = useState("");

  // Load Pyodide on mount
  useEffect(() => {
    const loadPy = async () => {
      const py = await window.loadPyodide();
      setPyodide(py);
    };
    loadPy();
  }, []);

  const runPythonCode = async () => {
    try {
      const result = await pyodide.runPythonAsync(code);
      setOutput(result?.toString() || "✅ Code ran successfully.");
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧪 Python Compiler</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-400 rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={runPythonCode}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Run Code
      </button>
      <h2 className="text-xl mt-6 font-semibold">Output:</h2>
      <pre className="bg-gray-100 p-3 mt-2 rounded border">{output}</pre>
    </div>
  );
}

export default App;
