import { useEffect, useState } from "react";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(
    "name = input('Enter your name: ')\nprint(f'Hello, {name}!')\nprint('This is another line of output.')"
  );
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPy = async () => {
      try {
        const py = await window.loadPyodide();
        py.setStdout({ write: (text) => setOutput((prev) => prev + text + "\n") });
        py.setStderr({ write: (text) => setOutput((prev) => prev + text + "\n") });
        py.globals.set("js_prompt", (msg) => window.prompt(msg));
        setPyodide(py);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load Pyodide", err);
        setOutput("❌ Pyodide failed to load.");
        setIsLoading(false);
      }
    };
    loadPy();
  }, []);

  const runPythonCode = async () => {
    if (!pyodide) return;

    setOutput("");

    try {
      await pyodide.runPythonAsync(`
import sys
import builtins
def custom_input(prompt=""):
    sys.stdout.flush()
    sys.stderr.flush()
    return js_prompt(prompt)
builtins.input = custom_input
sys.stdin.readline = custom_input
      `);

      const result = await pyodide.runPythonAsync(code);
      if (result !== undefined && result !== null) {
        setOutput((prev) => prev + "\nResult: " + result.toString());
      }
    } catch (err) {
      setOutput((prev) => prev + "\n❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🧪 Python Compiler</h1>

      {isLoading ? (
        <p className="text-gray-600 text-lg">Loading Pyodide...</p>
      ) : (
        <>
          <textarea
            className="w-full h-40 p-4 mb-4 border border-gray-300 rounded-lg shadow-sm text-gray-800 bg-white font-mono"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button
            onClick={runPythonCode}
            className="mb-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            ▶️ Run Code
          </button>

          <h2 className="text-xl font-semibold text-gray-800">Output:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-inner whitespace-pre-wrap text-sm max-h-80 overflow-y-auto text-gray-900">
            {output}
          </pre>
          <p>{output}</p>
        </>
      )}
    </div>
  );
}

export default App;
