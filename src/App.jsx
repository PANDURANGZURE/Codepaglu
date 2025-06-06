import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(
    "print('Made By Sauravv Zure')"
  );
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [isDarkMode, setIsDarkMode] = useState(false);  // <--- Dark mode state

  useEffect(() => {
    async function loadPy() {
      try {
        const py = await window.loadPyodide();

        function printToOutput(text) {
          setOutput((prev) => prev + text);
        }

        py.globals.set("printToOutput", printToOutput);

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

    setOutput("");

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
    <div className= "p-6 max-w-3xl mx-auto font-sans min-h-screen" >
      <h1 className="text-3xl font-bold mb-6">🧪 Python Compiler</h1>
      {isLoading ? (
        <p>Loading Pyodide...</p>
      ) : (
        <>
          <Editor
            height="250px"
            language="python"
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
              tabSize: 4,
              automaticLayout: true,
            }}
          />

          <button
            onClick={runPythonCode}
            className="mt-4 mb-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            ▶️ Run Code
          </button>

          <h2 className="text-xl font-semibold">Output:</h2>
          <pre className="p-4 rounded-lg border shadow-inner whitespace-pre-wrap text-sm max-h-80 overflow-y-auto ">
            {output}
          </pre>
        </>
      )}
    </div>
  );
}

export default App;
