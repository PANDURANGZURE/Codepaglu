import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Python() {
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
    
    <>
    <div>
      <Header/>
    </div>
    <div className="bg-[#0c0c0c] text-white ">
      <h1 className="text-3xl font-bold mb-6">🧪 Python Compiler</h1>
    <div className= "p-6  mx-auto font-sans h-screen md:flex " >
      
      
      {isLoading ? (
        <p>Loading Pyodide...</p>
      ) : (
        <>
        <div className="md:w-[50%] ">
          <div className=" flex justify-end border border-gray-700">
            <button
            onClick={runPythonCode}
            className="m-2 bg-black text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            ▶️ Run Code
          </button>
          </div>
          <Editor
          
          className="h-[65%] md:w-[50%]  border border-gray-700 "
            // height="250px"
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
              padding: {
      top: 16,
      bottom: 16
    }
            }}
          />
        </div>

          {/* <div className="h-auto w-0.5 bg-amber-400 m-2"></div> */}

          <div className="md:w-[50%]   ">
            <h2 className="text-xl font-semibold border border-gray-700 p-3.5">Output:</h2>
          <pre className="p-4  border  border-gray-700 shadow-inner whitespace-pre-wrap text-sm  overflow-y-auto ">
            {output}
          </pre>
          </div>
        </>
      )}
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default Python;
