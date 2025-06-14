import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Play } from 'lucide-react';
import Loader from "../Components/Loader";
import { div } from "motion/react-client";


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

      <div className="flex w-screen">
        {/* Side Stripe */}
        <div className="min-h-screen md:w-14 bg-black relative w-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>

        {/* Main Content */}
        
        <div className="bg-black text-white flex-1 ">
          
<hr className="border-t mt-10" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
          <h1 className="px-1 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-4xl lg:text-5xl xl:text-6xl">Python Interpreter</h1>
          <hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
          <div
  className=" h-8  bg-black relative "
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
  }}
></div>
<hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
<div className="flex md:justify-center justify-end gap-10 md:mr-5 mr-2 ">
  
  <button
   disabled={isLoading}
  className={`bg-white py-2 rounded-3xl font-semibold cursor-pointer text-md text-black text-center w-24
    ${isLoading ? "opacity-50  bg-white   py-2 rounded-3xl font-semibold cursor-pointer text-md text-black text-center md:w-24" : ""}
  `}
  onClick={runPythonCode} >
    <div className="flex justify-center ">
      
      <p>Run</p>
    <Play className="p-0.5"/> 
    
    </div></button>
  <p className="md:block hidden text-xl mt-1 font-semibold">Output:</p>
</div>
<hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
          {isLoading ? (
            <div className="flex h-1/2 justify-center items-center">
              Interpreter is getting ready for you ....
              </div>
          ) : (
            <div className="md:flex gap-4">
              {/* Editor Panel */}
              <div className="md:w-1/2 w-screen flex flex-col">
                <div className="flex justify-end mb-2">
                  
                </div>
                <Editor
                  className="rounded border border-gray-700 md:m-0 m-3 h-[400px] md:h-[59vh]"
                  // height="60vh"
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
                <h2 className="text-xl font-semibold mb-2 md:hidden block">Output:</h2>
                <pre className="h-[60vh] p-4  md:m-0 m-3 rounded border border-gray-700 shadow-inner whitespace-pre-wrap text-sm overflow-y-auto bg-black">
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
