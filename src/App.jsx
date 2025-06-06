import { useEffect, useState, useRef } from "react";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(
    "name = input('Enter your name: ')\nprint(f'Hello, {name}!')\nprint('This is another line of output.')"
  );
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const outputBufferRef = useRef([]); // Persistent output buffer

  // Capture output from Pyodide
  const capturePyodideOutput = (text) => {
    outputBufferRef.current.push(text);
  };

  useEffect(() => {
    const loadPy = async () => {
      try {
        const py = await window.loadPyodide();

        // Redirect stdout and stderr
        py.setStdout({ write: capturePyodideOutput });
        py.setStderr({ write: capturePyodideOutput });

        // Expose prompt to Python
        py.globals.set("js_prompt", (message) => window.prompt(message));

        setPyodide(py);
        setIsLoading(false);
      } catch (error) {
        console.error("Pyodide load error:", error);
        setOutput("❌ Error loading Pyodide.");
        setIsLoading(false);
      }
    };
    loadPy();
  }, []);

  const runPythonCode = async () => {
    if (!pyodide) {
      setOutput("Pyodide is not loaded yet.");
      return;
    }

    outputBufferRef.current = []; // Clear buffer
    setOutput(""); // Clear UI output

    try {
      // Override input()
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
        outputBufferRef.current.push(result.toString());
      }

      const finalOutput = outputBufferRef.current.join("\n");
      setOutput(finalOutput || "✅ Code ran successfully (no output).");
    } catch (err) {
      const errorOutput =
        "❌ Error: " + err.message +
        (outputBufferRef.current.length > 0
          ? "\n-- Output before error --\n" + outputBufferRef.current.join("\n")
          : "");
      setOutput(errorOutput);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">🧪 Python Compiler</h1>

      {isLoading ? (
        <p className="text-gray-600">Loading Python environment...</p>
      ) : (
        <>
          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y text-gray-800 bg-white"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your Python code here"
            spellCheck="false"
          />

          <button
            onClick={runPythonCode}
            className="mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Run Code
          </button>

          <h2 className="text-xl mt-6 font-semibold text-gray-800">Output:</h2>
          <pre className="bg-gray-50 p-4 mt-2 rounded-lg border border-gray-200 shadow-inner whitespace-pre-wrap text-sm max-h-80 overflow-y-auto font-mono text-gray-900">
            {output}
          </pre>
          
        </>
      )}
    </div>
  );
}

export default App;
