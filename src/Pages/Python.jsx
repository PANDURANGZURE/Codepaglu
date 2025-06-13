import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Python() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("print('Made By Sauravv Zure')");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    def __init__(self): pass
    def write(self, s):
        if s.strip() != '':
            printToOutput(s)
    def flush(self): pass

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
    <>
      <Header />
      <hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />

      <div className="flex">
        {/* Side Stripe */}
        <div className="min-h-screen w-14 bg-black relative md:block hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>

        {/* Main Content */}
        <div className="bg-black text-white flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">🧪 Python Compiler</h1>

          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="md:flex gap-4">
              {/* Editor Panel */}
              <div className="md:w-1/2 w-full flex flex-col">
                <div className="flex justify-end mb-2">
                  <button
                    onClick={runPythonCode}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white shadow"
                  >
                    ▶️ Run Code
                  </button>
                </div>
                <Editor
                  className="rounded border border-gray-700"
                  height="60vh"
                  language="python"
                  value={code}
                  onChange={setCode}
                  theme="hc-black"
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: "on",
                    tabSize: 4,
                    automaticLayout: true,
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>

              {/* Output Panel */}
              <div className="md:w-1/2 w-full mt-6 md:mt-0">
                <h2 className="text-xl font-semibold mb-2">Output:</h2>
                <pre className="h-[60vh] p-4 rounded border border-gray-700 shadow-inner whitespace-pre-wrap text-sm overflow-y-auto bg-black">
                  {output}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Python;
