const docs = [
  {
    id: "intro",
    title: "Introduction",
    content: (
      <>
       <p className="mb-4">
          Python is a high-level, interpreted programming language known for its simplicity and readability. It is one of the most widely used languages across various domains, including web development, data analysis, machine learning, automation, and more.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features of Python</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Simple and easy-to-read syntax that mimics natural language.</li>
          <li>Dynamically typed and supports multiple programming paradigms.</li>
          <li>Large standard library and vibrant ecosystem of third-party packages.</li>
          <li>Excellent support for integration with other languages and tools.</li>
          <li>Cross-platform support: runs on Windows, macOS, and Linux.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Why Learn Python?</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Beginner-friendly and widely used in education.</li>
          <li>In-demand in careers like Data Science, AI/ML, DevOps, and Web Development.</li>
          <li>Used by top companies including Google, Netflix, Facebook, NASA, and Spotify.</li>
          <li>Rich ecosystem: Django (web), Pandas (data), TensorFlow (AI), and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Hello, World! in Python</h2>
        <p className="mb-2">Here’s how a simple Python program looks:</p>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-auto">
          <code className="language-python">print("Hello, World!")</code>
        </pre>

        <p className="mt-6">
          This line of code prints a message to the screen. Python doesn't require semicolons, and its syntax is clean and minimal, making it a favorite among beginners and experts alike.
        </p>

         <h2 className="text-2xl font-semibold mt-8 mb-2">Popular Applications of Python</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Web Development:</strong> Frameworks like Django and Flask make it easy to build powerful web apps.
          </li>
          <li>
            <strong>Data Science & Analytics:</strong> Widely used with libraries like NumPy, Pandas, and Matplotlib.
          </li>
          <li>
            <strong>Machine Learning & AI:</strong> Libraries like TensorFlow, Scikit-learn, and PyTorch drive innovation in AI.
          </li>
          <li>
            <strong>Automation & Scripting:</strong> Python excels at writing scripts to automate repetitive tasks.
          </li>
          <li>
            <strong>Desktop Applications:</strong> Tools like PyQt and Tkinter help build GUI apps.
          </li>
          <li>
            <strong>Cybersecurity & Hacking:</strong> Python is a favorite for writing exploits, scripts, and tools in ethical hacking.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Python Syntax Basics</h2>
        <p className="mb-2">Here’s a quick look at Python syntax compared to other languages:</p>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-auto mb-4">
          <code className="language-python">
{`# Python
if age >= 18:
    print("You're an adult")
`}
          </code>
        </pre>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
          <code className="language-java">
{`// Java
if (age >= 18) {
    System.out.println("You're an adult");
}`}
          </code>
        </pre>

        <p className="mt-6">
          Python uses **indentation** instead of braces, making code more readable and enforcing clean formatting.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Real-World Companies Using Python</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Google:</strong> Python is one of its official server-side languages.</li>
          <li><strong>Netflix:</strong> Uses Python for data analysis, automation, and backend services.</li>
          <li><strong>NASA:</strong> Scripts and scientific applications use Python extensively.</li>
          <li><strong>Instagram:</strong> Entire backend was built using Django (Python framework).</li>
          <li><strong>Spotify:</strong> Relies on Python for backend services and data pipelines.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Next Steps</h2>
        <p>
          To get started, install Python from <a href="https://www.python.org" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">python.org</a>, and try writing simple scripts in an editor like VS Code. As you advance, explore frameworks and libraries that align with your interests.
        </p>

        <p className="mt-4">
          Whether you're building web apps, analyzing data, or automating your workflow — Python opens the door to endless possibilities.
        </p>
      </>
    )
  },
  {
    id: "install",
    title: "Installation",
    content: (
      <p>
        To install Python, go to{" "}
        <a className="text-blue-400 underline" href="https://www.python.org" target="_blank" rel="noopener noreferrer">
          python.org
        </a>{" "}
        and download the installer.
      </p>
    )
  },
  {
    id: "syntax",
    title: "Basic Syntax",
    content: (
      <p>Python uses indentation to define blocks. This makes the code clean and readable.</p>
    )
  },
  {
    id: "saurav",
    title: "saurav",
    content: <p>saurav</p>
  }
];

export default docs;
