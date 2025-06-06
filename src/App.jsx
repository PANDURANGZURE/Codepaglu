import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(
    "name = input('Enter your name: ')\nprint(f'Hello, {name}!')\nprint('This is another line of output.')"
  );
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPy() {
      try {
        const py = await window.loadPyodide();

        // JS function to receive output from Python
        function printToOutput(text) {
          setOutput((prev) => prev + text);
        }

        // Expose JS print function to Python
        py.globals.set("printToOutput", printToOutput);

        // Override sys.stdout and sys.stderr in Python
        await py.runPythonAsync(`
import sys

class OutputCatcher:
    def __init__(self):
        pass
    def write(self, s):
        if s.strip() != '':
            printToOutput(s)
    def flush(self):
        pass

sys.stdout = OutputCatcher()
sys.stderr = OutputCatcher()
        `);

        // Override input() to use window.prompt
        py.globals.set("js_prompt", (msg) => window.prompt(msg));
        await py.runPythonAsync(`
import builtins
def custom_input(prompt=""):
    return js_prompt(prompt)
builtins.input = custom_input
        `);

        setPyodide(py);
        setIsLoading(false);
      } catch (err) {
        setOutput("❌ Pyodide failed to load.");
        setIsLoading(false);
      }
    }
    loadPy();
  }, []);

  const runPythonCode = async () => {
    if (!pyodide) return;

    setOutput(""); // Clear output before running code

    try {
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
          <Editor
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
        </>
      )}
    </div>
  );
}

export default App;
