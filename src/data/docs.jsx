const docs = [

  //intro
  {
    id: "intro",
    title: "Introduction",
    content: (
      <>
      <hr className="mb-2" />
       <p className="mb-4">
          Python is a high-level, interpreted programming language known for its simplicity and readability. It is one of the most widely used languages across various domains, including web development, data analysis, machine learning, automation, and more.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features of Python</h2>
        <hr className="mb-2" />
        <ul className="list-disc ml-6 space-y-1">
          <li>Simple and easy-to-read syntax that mimics natural language.</li>
          <li>Dynamically typed and supports multiple programming paradigms.</li>
          <li>Large standard library and vibrant ecosystem of third-party packages.</li>
          <li>Excellent support for integration with other languages and tools.</li>
          <li>Cross-platform support: runs on Windows, macOS, and Linux.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Why Learn Python?</h2>
        <hr className="mb-2" />
        <ul className="list-disc ml-6 space-y-1">
          <li>Beginner-friendly and widely used in education.</li>
          <li>In-demand in careers like Data Science, AI/ML, DevOps, and Web Development.</li>
          <li>Used by top companies including Google, Netflix, Facebook, NASA, and Spotify.</li>
          <li>Rich ecosystem: Django (web), Pandas (data), TensorFlow (AI), and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Hello, World! in Python</h2>
        <hr className="mb-2" />
        <p className="mb-2">Here’s how a simple Python program looks:</p>
        <pre className=" bg-[#0f0f0f] text-white p-4 rounded overflow-auto">
          <pre className="language-python
          ">print("Hello, World!")</pre>
        </pre>

        <p className="mt-6">
          This line of code prints a message to the screen. Python doesn't require semicolons, and its syntax is clean and minimal, making it a favorite among beginners and experts alike.
        </p>

         <h2 className="text-2xl font-semibold mt-8 mb-2">Popular Applications of Python</h2>
         <hr className="mb-2" />
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
        <hr className="mb-2" />
        <p className="mb-2">Here’s a quick look at Python syntax compared to other languages:</p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded overflow-auto mb-4">
          <code className="language-python">
{`# Python
if age >= 18:
    print("You're an adult")
`}
          </code>
        </pre>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded overflow-auto">
          
          <code className="language-python">
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
        <hr className="mb-2" />
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Google:</strong> Python is one of its official server-side languages.</li>
          <li><strong>Netflix:</strong> Uses Python for data analysis, automation, and backend services.</li>
          <li><strong>NASA:</strong> Scripts and scientific applications use Python extensively.</li>
          <li><strong>Instagram:</strong> Entire backend was built using Django (Python framework).</li>
          <li><strong>Spotify:</strong> Relies on Python for backend services and data pipelines.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Next Steps</h2>
        <hr className="mb-2" />
        <p>
          To get started, install Python from <a href="https://www.python.org" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">python.org</a>, and try writing simple scripts in an editor like VS Code. As you advance, explore frameworks and libraries that align with your interests.
        </p>

        <p className="mt-4">
          Whether you're building web apps, analyzing data, or automating your workflow — Python opens the door to endless possibilities.
        </p>
      </>
    )
  },

  //install
  {
  id: "install",
  title: "Installation",
  content: (
    <>
      <p className="mb-4">
        Installing Python on your system is the first step to start coding. Python is cross-platform, which means it works on Windows, macOS, and Linux.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Step 1: Download Python</h2>
      <p className="mb-2">
        Go to the official Python website:{" "}
        <a
          href="https://www.python.org/downloads/"
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          python.org/downloads
        </a>
      </p>
      <ul className="list-disc ml-6 space-y-1 mb-4">
        <li>Click on the download button for your operating system.</li>
        <li>The latest version (e.g., Python 3.x) is recommended.</li>
        <li>Make sure to download the correct architecture (64-bit or 32-bit).</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Step 2: Install Python (Windows)</h2>
      <ul className="list-decimal ml-6 space-y-1 mb-4">
        <li>Run the downloaded `.exe` file.</li>
        <li><strong>Important:</strong> Check the box that says <code>Add Python to PATH</code>.</li>
        <li>Click on "Install Now" and follow the prompts.</li>
        <li>Once installed, open Command Prompt and type: <code>python --version</code></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Step 3: Install Python (macOS)</h2>
      <ul className="list-decimal ml-6 space-y-1 mb-4">
        <li>Download the macOS installer (.pkg) from python.org.</li>
        <li>Run the installer and follow the instructions.</li>
        <li>After installation, open Terminal and type: <code>python3 --version</code></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Step 4: Install Python (Linux)</h2>
      <p className="mb-2">Python is often pre-installed on Linux. To check, run:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded overflow-auto mb-4">
        <code className="language-bash">python3 --version</code>
      </pre>
      <p>If not installed, you can install it using:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded overflow-auto mb-4">
        <code className="language-bash">sudo apt install python3</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 mt-6">Step 5: Verify Installation</h2>
      <p className="mb-2">Run this in your terminal or command prompt:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded overflow-auto">
        <code className="language-bash">python --version</code>
      </pre>

      <p className="mt-4">
        If installed correctly, you'll see the installed Python version number (e.g., <code>Python 3.11.5</code>).
      </p>
    </>
  )
},



//Basic Syntax
  {
  id: "syntax",
  title: "Basic Syntax",
  content: (
    <>
      <p className="mb-4">
        Python's syntax is clean and readable. Unlike many other programming languages, Python uses <strong>indentation</strong> (whitespace) to define code blocks instead of curly braces.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Print Statement</h2>
      <p className="mb-2">Use the <code>print()</code> function to display output:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">print("Hello, Python!")</code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Indentation</h2>
      <p className="mb-2">Indentation defines blocks of code (like inside if, for, or functions):</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`if 5 > 2:
    print("5 is greater than 2")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Variables</h2>
      <p className="mb-2">You don’t need to declare the type of a variable. Python figures it out automatically:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`name = "Alice"
age = 25
is_student = True`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Comments</h2>
      <p className="mb-2">Use <code>#</code> to add a single-line comment:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`# This is a comment
print("Python is fun!")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Types</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>int</strong> – integers: <code>x = 10</code></li>
        <li><strong>float</strong> – decimal numbers: <code>pi = 3.14</code></li>
        <li><strong>str</strong> – strings: <code>name = "Alice"</code></li>
        <li><strong>bool</strong> – boolean: <code>is_active = True</code></li>
        <li><strong>list</strong> – list of items: <code>colors = ["red", "blue"]</code></li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Type Checking</h2>
      <p className="mb-2">Use the <code>type()</code> function to check a variable’s data type:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`print(type("Hello"))  # Output: <class 'str'>`}
        </code>
      </pre>

      <p className="mt-4">
        Python's simplicity makes it an excellent language for beginners. Understanding basic syntax helps you build strong foundations.
      </p>
    </>
  )
}
//comments
,{
  id: "comments",
  title: "Comments",
  content: (
    <>
      <p className="mb-4">
        Comments are used to explain code and make it more readable. Python ignores comments during execution. They are helpful for documentation or leaving notes in your code.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Single-line Comments</h2>
      <p className="mb-2">Use the hash symbol <code>#</code> for single-line comments:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`# This is a single-line comment
print("Hello, Python!")  # This prints a message`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Multi-line Comments</h2>
      <p className="mb-2">
        Python does not have a specific multi-line comment syntax, but you can use multiple <code>#</code> symbols:
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`# This is a comment
# that spans multiple
# lines.`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Docstrings (Multi-line Strings as Comments)</h2>
      <p className="mb-2">
        Triple quotes (<code>"""</code> or <code>'''</code>) are used for documentation strings (docstrings) in functions or classes. These are also treated as multi-line comments when not assigned to a variable.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`"""
This is a multi-line
comment using triple quotes.
"""
print("Docstring example")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Function Docstring</h2>
      <p className="mb-2">You can add docstrings inside functions to describe what they do:</p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-4">
        <code className="language-python">
{`def greet(name):
    """This function greets the user by name."""
    print(f"Hello, {name}!")`}
        </code>
      </pre>

      <p className="mt-4">
        Use comments wisely — they make your code more understandable for you and others!
      </p>
    </>
  )
},

//variable
{
  id: "variables",
  title: "Variables",
  content: (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">1. What is a Variable?</h2>
      <p className="mb-4">
        A variable is a name that stores data in your program. It works like a labeled box where you keep information such as numbers or words. You can use variables to save values and reuse them later. Variables make your code cleaner and easier to manage. The data inside a variable can change during the program. Each variable must have a unique name.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. Why use Variables?</h2>
      <p className="mb-4">
        Variables help you keep track of information that may change while your program runs. Instead of repeating the same value many times, you use a variable name. This makes your code easier to read and update. Variables reduce errors by avoiding duplicated values. They let your program be flexible and dynamic. You can store and change data anytime.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Where to use Variables?</h2>
      <p className="mb-4">
        Use variables whenever you want to store data in your program. For example, you can save a person’s age, a product price, or a user’s name. Variables also store True/False values for decisions. They are used in calculations, loops, and many other places. Variables hold temporary or permanent information your program needs. They are everywhere in programming.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Syntax of Variables</h2>
      <p className="mb-4">
        To create a variable, write its name, then an equals sign, then the value you want to store. For example: <code>score = 100</code>. Variable names should start with a letter or underscore, and can’t contain spaces or special characters. Names are case-sensitive, so <code>score</code> and <code>Score</code> are different. Avoid using Python reserved keywords as names.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Types of Variables</h2>
      <p className="mb-4">
        Variables can hold different types of data. Common types include:
        <ul>
            <li><strong>int</strong>: whole numbers like 10 or -5</li>
            <li><strong>float</strong>: decimal numbers like 3.14 or -0.5</li>
            <li><strong>str</strong>: text inside quotes like "hello"</li>
            <li><strong>bool</strong>: True or False values</li>
        </ul>
        Python automatically decides the type when you assign a value. You don’t need to specify it.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Example of Variables</h2>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`age = 20          # int
price = 9.99        # float
name = "Alice"      # str
is_student = True   # bool
print(name, "is", age, "years old.")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Scope of Variables (Local vs. Global)</h2>
      <p className="mb-4">
        The "scope" of a variable refers to the region of your code where that variable is accessible. In Python, variables primarily have two types of scope: **Local** and **Global**. Understanding scope is crucial for writing clean and bug-free code, especially in larger programs.
      </p>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.1. Global Variables</h3>
      <p className="mb-2">
        A global variable is a variable defined outside of any function or class. It can be accessed and modified from anywhere in the program, both inside and outside functions.
      </p>
      <p className="mb-2">
        <strong>Syntax:</strong> Define the variable at the top level of your script, not indented within any function.
      </p>
      <p className="mb-4">
        <strong>Example:</strong>
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`# Global variable
global_message = "Hello from global scope!"

def greet():
    print(global_message) # Can access global_message

def change_global():
    # To modify a global variable inside a function, use the 'global' keyword
    global global_message
    global_message = "Global message has been changed!"

greet() # Output: Hello from global scope!
print(global_message) # Output: Hello from global scope!

change_global()
print(global_message) # Output: Global message has been changed!`}
        </code>
      </pre>
      <p className="mb-4">
        **Note:** While you can access a global variable from inside a function, if you try to *modify* it without using the `global` keyword, Python will create a *new local variable* with the same name instead.
      </p>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.2. Local Variables</h3>
      <p className="mb-2">
        A local variable is a variable defined inside a function. It is only accessible within that specific function and cannot be accessed from outside of it. Once the function finishes execution, the local variable is destroyed.
      </p>
      <p className="mb-2">
        <strong>Syntax:</strong> Define the variable within the indented block of a function.
      </p>
      <p className="mb-4">
        <strong>Example:</strong>
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`def my_function():
    # Local variable
    local_number = 10
    print(f"Inside the function, local_number is: {local_number}")

my_function() # Output: Inside the function, local_number is: 10

# Trying to access local_number outside the function will result in an error
# print(local_number) # This would raise a NameError: name 'local_number' is not defined`}
        </code>
      </pre>
      <p className="mb-4">
        **Why is scope important?** It helps prevent naming conflicts, makes functions self-contained (easier to test and reuse), and improves code readability by indicating where a variable is relevant.
      </p>

      
    </>
  )
},

// data type
{
  id: "data-types",
  title: "Data Types",
  content: (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">1. What is Data Type?</h2>
      <p className="mb-4">
        Data type tells the computer what kind of data is stored or processed. It defines the nature of data such as numbers, text, or True/False values. Different types help Python know what operations can be done. For example, you can add numbers but not texts the same way. Python assigns types automatically. Knowing types prevents errors.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. Why use Data Types?</h2>
      <p className="mb-4">
        Using correct data types ensures your program works as expected. It helps Python perform correct operations on data. Without data types, Python wouldn’t know how to handle values. For example, adding two numbers is different from joining two strings. Data types improve code clarity and help avoid mistakes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Where to use Data Types?</h2>
      <p className="mb-4">
        Data types are used anytime you store data, do calculations, or make decisions. Counting needs integers, messages use strings, and checking conditions uses booleans. Variables and functions depend on data types to work properly. Understanding data types is important for writing error-free code.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Syntax of Data Types</h2>
      <p className="mb-4">
        Python does not require you to declare data types explicitly. You just assign a value and Python guesses the type. Example: <code>num = 5</code> (int), <code>price = 10.5</code> (float), <code>name = "Anna"</code> (string). Use the <code>type()</code> function to check the data type.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Common Data Types</h2>
      <p className="mb-4">
        The most common types are:
        <strong>int</strong> for whole numbers,
        <strong>float</strong> for decimals,
        <strong>str</strong> for text,
        and <strong>bool</strong> for True or False values.
        Python also has other types but these are the basics.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Example of Data Types</h2>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`age = 25           # int
price = 9.99       # float
name = "Alice"     # str
is_happy = True    # bool
print(type(age))   # Output: <class 'int'>
print(type(price)) # Output: <class 'float'>
print(type(name))  # Output: <class 'str'>
print(type(is_happy)) # Output: <class 'bool'>`}
        </code>
      </pre>

      {/* NEW SECTIONS FOR INDIVIDUAL DATA TYPES START HERE */}

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Detailed Data Type Explanations</h2>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.1. Integer (`int`)</h3>
      <p className="mb-2">
        The `int` data type in Python represents whole numbers, which can be positive, negative, or zero, without any decimal component. Python's integers have **arbitrary precision**, meaning their size is only limited by the available memory of your system. This allows you to work with extremely large numbers without worrying about overflow errors common in other languages.
      </p>
      <p className="mb-4">
        <strong>Common Uses:</strong> Counting items, representing ages, scores, years, or any quantity that doesn't require fractional parts.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`# Examples of integer variables
num_students = 30
year = 2025
balance = -500
large_number = 123_456_789_012_345 # Underscores for readability (Python 3.6+)

print(f"Number of students: {num_students}, Type: {type(num_students)}")
print(f"Current year: {year}, Type: {type(year)}")
print(f"Account balance: {balance}, Type: {type(balance)}")
print(f"Large number: {large_number}, Type: {type(large_number)}")

# Operations with integers
sum_result = num_students + 5
product_result = year * 2
print(f"Sum result: {sum_result}")
print(f"Product result: {product_result}")`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.2. Floating-Point (`float`)</h3>
      <p className="mb-2">
        The `float` data type represents real numbers, which are numbers that have a decimal point. This includes both positive and negative numbers. Python's `float` type uses a double-precision (64-bit) floating-point representation, which means it can store a very wide range of values but might have slight precision issues with certain decimal fractions due to how computers store floating-point numbers internally.
      </p>
      <p className="mb-4">
        <strong>Common Uses:</strong> Prices, measurements, temperatures, scientific calculations, averages, or any value requiring fractional precision.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`# Examples of float variables
temperature = 25.5
price = 19.99
pi_value = 3.14159265
small_fraction = 0.001

print(f"Current temperature: {temperature}, Type: {type(temperature)}")
print(f"Product price: {price}, Type: {type(price)}")
print(f"Value of Pi: {pi_value}, Type: {type(pi_value)}")

# Operations with floats
average = (95 + 88 + 72) / 3.0
discounted_price = price * 0.85
print(f"Average score: {average}")
print(f"Discounted price: {discounted_price}")

# Note on precision:
# print(0.1 + 0.2) # Might output 0.30000000000000004 due to float representation`}
        </code>
      </pre>
      <p className="mb-4">
        For financial or highly precise calculations where even tiny decimal errors are unacceptable, consider using Python's `decimal` module, which provides arbitrary-precision decimal arithmetic.
      </p>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.3. String (`str`)</h3>
      <p className="mb-2">
        The `str` (string) data type is used to represent sequences of characters, essentially text. Strings are immutable, meaning once a string object is created, its content cannot be altered. Any operation that seems to "change" a string, like concatenation or slicing, actually creates a *new* string object. Strings can be defined using single quotes (`'...'`), double quotes (`"..."`), or triple quotes (`'''...'''` or `"""..."""`) for multiline strings.
      </p>
      <p className="mb-4">
        <strong>Common Uses:</strong> Names, messages, addresses, sentences, paragraphs, file paths, URLs, and any other textual data.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`# Examples of string variables
user_name = "Alice"
greeting_message = 'Hello, world!'
multiline_quote = """
"The only way to do great work is to love what you do."
- Steve Jobs
"""

print(f"User Name: {user_name}, Type: {type(user_name)}")
print(f"Greeting: {greeting_message}, Type: {type(greeting_message)}")
print(f"Quote:\n{multiline_quote}")

# String operations
full_name = "John" + " " + "Doe"
print(f"Full Name: {full_name}")

length = len(greeting_message)
print(f"Length of greeting: {length}")

# Accessing characters (strings are sequences)
first_char = user_name[0]
print(f"First character of name: {first_char}") # Output: A`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-3 mb-1">7.4. Boolean (`bool`)</h3>
      <p className="mb-2">
        The `bool` (boolean) data type represents logical values. It can only hold one of two predefined values: `True` or `False`. These values are essential for making decisions, controlling program flow, and evaluating conditions. Booleans are a subclass of integers, where `True` numerically represents `1` and `False` represents `0`, though you should primarily use them for their logical meaning.
      </p>
      <p className="mb-4">
        <strong>Common Uses:</strong> Representing binary states (on/off, yes/no), results of comparisons (e.g., `x  y`), flags to indicate conditions, and controlling `if` statements and loops.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`# Examples of boolean variables
is_active = True
has_access = False
is_empty = False

print(f"Is user active? {is_active}, Type: {type(is_active)}")
print(f"Does user have access? {has_access}, Type: {type(has_access)}")

# Booleans in conditional statements
if is_active and has_access:
    print("User is active and has access.")
elif is_active:
    print("User is active but lacks access.")
else:
    print("User is not active.")

# Boolean results from comparisons
age = 20
is_adult = (age >= 18)
print(f"Is age 20 an adult? {is_adult}") # Output: True

# "Truthiness" and "Falsiness"
# In Python, many values are considered "truthy" or "falsy" in a boolean context:
# Falsy: 0, 0.0, None, '', [], {}, (), set()
# Truthy: Any non-zero number, non-empty string, list, dictionary, etc.
if []:
    print("This won't print as empty list is falsy.")
if "hello":
    print("This will print as non-empty string is truthy.")`}
        </code>
      </pre>
    </>
  )
},

//numbers
{
  id: "python-numbers",
  title: "Python Numbers",
  content: (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction to Numeric Types</h2>
      <p className="mb-4">
        In Python, numbers are fundamental data types used to store numerical values. Python supports three primary numeric types:
        <ul>
          <li><strong><code>int</code></strong>: Integers (whole numbers).</li>
          <li><strong><code>float</code></strong>: Floating-point numbers (numbers with decimals).</li>
          <li><strong><code>complex</code></strong>: Complex numbers (numbers with an imaginary part).</li>
        </ul>
        Variables of numeric types are created automatically when you assign a numerical value to them. Python handles the type inference for you.
      </p>

      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Creating Numeric Variables</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 1     # int
y = 2.8   # float
z = 1j    # complex

print(f"x = {x}, Type: {type(x)}")
print(f"y = {y}, Type: {type(y)}")
print(f"z = {z}, Type: {type(z)}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. The `int` (Integer) Type</h2>
      <p className="mb-2">
        The `int`, or integer, data type represents whole numbers. These can be positive, negative, or zero. A key feature of Python integers is that they have **unlimited length** (or arbitrary precision). This means the size of an integer is only limited by your system's memory, allowing you to work with extremely large numbers without concern for overflow.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Integers</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 1
y = 35656222554887711
z = -3255522

print(f"x: {x}, Type: {type(x)}")
print(f"y: {y}, Type: {type(y)}")
print(f"z: {z}, Type: {type(z)}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. The `float` (Floating Point Number) Type</h2>
      <p className="mb-2">
        A `float`, or "floating point number," is a number that contains one or more decimal points. These can be positive or negative. Floats are used when you need to represent real numbers, such as measurements, prices, or scientific values. Python's `float` typically uses a double-precision (64-bit) representation.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Basic Floats</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 1.10
y = 1.0  # Even though it's a whole number, the decimal makes it a float
z = -35.59

print(f"x: {x}, Type: {type(x)}")
print(f"y: {y}, Type: {type(y)}")
print(f"z: {z}, Type: {type(z)}")`}
        </code>
      </pre>
      <h3 className="text-lg font-semibold mt-3 mb-1">Scientific Numbers with "e"</h3>
      <p className="mb-2">
        Floats can also be expressed in scientific notation, using an "e" (or "E") to indicate the power of 10. For example, `3e3` means $3 \times 10^3 = 3000$.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 35e3   # 35 * 10^3 = 35000.0
y = 12E4   # 12 * 10^4 = 120000.0
z = -87.7e100 # -87.7 * 10^100 (a very large negative number)

print(f"x: {x}, Type: {type(x)}")
print(f"y: {y}, Type: {type(y)}")
print(f"z: {z}, Type: {type(z)}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. The `complex` (Complex Number) Type</h2>
      <p className="mb-2">
        Complex numbers in Python are written with a "j" (or "J") as the imaginary part. They consist of a real part and an imaginary part, expressed as `real + imaginaryJ`.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Complex Numbers</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 3 + 5j
y = 5j    # Equivalent to 0 + 5j
z = -5j   # Equivalent to 0 - 5j

print(f"x: {x}, Type: {type(x)}")
print(f"y: {y}, Type: {type(y)}")
print(f"z: {z}, Type: {type(z)}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Type Conversion (Type Casting)</h2>
      <p className="mb-2">
        You can convert (or "cast") numbers from one numeric type to another using the built-in `int()`, `float()`, and `complex()` constructor functions. This is useful when you need a value to be of a specific type for a particular operation.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Converting Numeric Types</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = 1     # int
y = 2.8   # float
z = 1j    # complex

# Convert from int to float:
a = float(x)

# Convert from float to int: (Note: this truncates the decimal part)
b = int(y)

# Convert from int to complex: (The int becomes the real part)
c = complex(x)

print(f"Original x: {x}, Type: {type(x)}")
print(f"Converted a: {a}, Type: {type(a)}")

print(f"Original y: {y}, Type: {type(y)}")
print(f"Converted b: {b}, Type: {type(b)}")

print(f"Original x: {x}, Type: {type(x)}")
print(f"Converted c: {c}, Type: {type(c)}")`}
        </code>
      </pre>
      <p className="mb-4">
        <strong>Important Note:</strong> You **cannot** directly convert complex numbers into `int` or `float` types if they have a non-zero imaginary part, as this would lead to loss of data. You would first need to access the real part of the complex number (e.g., `z.real`).
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Generating Random Numbers</h2>
      <p className="mb-2">
        Python itself does not have a built-in `random()` function for generating random numbers directly. Instead, it provides a powerful **`random` module** that contains various functions for generating random values. To use these functions, you must first `import` the `random` module.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using the `random` Module</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`import random

# Generate a random integer between 1 (inclusive) and 9 (exclusive)
# So, possible outcomes are 1, 2, 3, 4, 5, 6, 7, 8, 9
random_int = random.randrange(1, 10)
print(f"Random number from 1 to 9: {random_int}")

# Another common function: random.randint(a, b) includes both a and b
random_inclusive = random.randint(1, 10) # Generates an integer from 1 to 10 (inclusive)
print(f"Random number from 1 to 10 (inclusive): {random_inclusive}")

# Generate a random float between 0.0 (inclusive) and 1.0 (exclusive)
random_float = random.random()
print(f"Random float between 0.0 and 1.0: {random_float}")`}
        </code>
      </pre>
      <p className="mb-4">
        The `random` module offers many more functions for different random generation needs, such as `random.uniform()` for floats within a range, `random.choice()` to pick from a sequence, and `random.shuffle()` to randomize a list.
      </p>
    </>
  )
},

//casting
{
  id: "python-casting",
  title: "Casting",
  content: (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">1. Understanding Type Casting</h2>
      <p className="mb-4">
        In Python, you generally don't need to explicitly declare the data type of a variable; Python automatically infers it when you assign a value. However, there are times when you might want to explicitly specify or change the type of a variable. This process is known as **casting**.
      </p>
      <p className="mb-4">
        Python is an object-oriented language, and its data types (even primitive ones like integers and floats) are implemented as classes. Therefore, casting in Python is performed using **constructor functions** for the respective data types.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. The `int()` Constructor</h2>
      <p className="mb-2">
        The `int()` constructor function is used to convert a value into an integer. It can take:
        <ul>
          <li>An integer literal (e.g., `int(5)`).</li>
          <li>A float literal (it will **remove all decimals**, effectively truncating the number, not rounding).</li>
          <li>A string literal, provided the string represents a whole number (e.g., `"123"`). It cannot convert strings containing decimals or non-numeric characters.</li>
        </ul>
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Casting to `int`</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = int(1)      # x will be 1 (from an integer literal)
y = int(2.8)    # y will be 2 (decimals are removed)
z = int("3")    # z will be 3 (from a string representing a whole number)

print(f"x = {x}, Type: {type(x)}")
print(f"y = {y}, Type: {type(y)}")
print(f"z = {z}, Type: {type(z)}")

# Example of what cannot be converted:
try:
    int("3.14")
except ValueError as e:
    print(f"Error converting '3.14' to int: {e}")

try:
    int("hello")
except ValueError as e:
    print(f"Error converting 'hello' to int: {e}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. The `float()` Constructor</h2>
      <p className="mb-2">
        The `float()` constructor function is used to convert a value into a floating-point number. It can take:
        <ul>
          <li>An integer literal (it will add `.0` to make it a float).</li>
          <li>A float literal (no change in value).</li>
          <li>A string literal, provided the string represents a float or an integer (e.g., `"3.14"` or `"5"`).</li>
        </ul>
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Casting to `float`</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = float(1)      # x will be 1.0 (from an integer)
y = float(2.8)    # y will be 2.8 (from a float literal)
z = float("3")    # z will be 3.0 (from a string representing an integer)
w = float("4.2")  # w will be 4.2 (from a string representing a float)

print(f"x = {x}, Type: {type(x)}")
print(f"y = {y}, Type: {type(y)}")
print(f"z = {z}, Type: {type(z)}")
print(f"w = {w}, Type: {type(w)}")

# Example of what cannot be converted:
try:
    float("hello")
except ValueError as e:
    print(f"Error converting 'hello' to float: {e}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. The `str()` Constructor</h2>
      <p className="mb-2">
        The `str()` constructor function is used to convert a wide variety of data types into a string. This is incredibly versatile, as almost any Python object can be represented as a string.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Casting to `str`</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`x = str("s1")   # x will be 's1' (from another string)
y = str(2)      # y will be '2' (from an integer)
z = str(3.0)    # z will be '3.0' (from a float)
a = str(True)   # a will be 'True' (from a boolean)
b = str([1, 2]) # b will be '[1, 2]' (from a list)

print(f"x = '{x}', Type: {type(x)}")
print(f"y = '{y}', Type: {type(y)}")
print(f"z = '{z}', Type: {type(z)}")
print(f"a = '{a}', Type: {type(a)}")
print(f"b = '{b}', Type: {type(b)}")`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Important Considerations for Casting</h2>
      <p className="mb-4">
        While casting is a powerful tool, keep these points in mind:
        <ul>
          <li><strong>Data Loss:</strong> Converting a `float` to an `int` will always truncate (cut off) the decimal part, not round. For example, `int(2.9)` becomes `2`.</li>
          <li><strong>`ValueError`:</strong> If you try to cast a string that doesn't represent a valid number (for `int()` or `float()`) or a valid boolean (for `bool()`), Python will raise a `ValueError`.</li>
          <li><strong>Complex Numbers:</strong> You cannot convert a `complex` number to an `int` or `float` if its imaginary part is non-zero, as this would result in data loss. You would need to explicitly access the real part (e.g., `my_complex_num.real`) to convert it.</li>
        </ul>
      </p>
    </>
  )
},

//string
{
  id: "python-strings", // This remains the main ID for the /string route
  title: "Strings", // The title for the main Strings page
  content: (
    <>
      {/* Existing Content for Python Strings */}
      <h2 className="text-xl font-semibold mt-4 mb-2">1. Defining Strings</h2>
      <p className="mb-4">
        Strings in Python are sequences of characters. They are used to store textual information. You can define a string by surrounding the text with either single quotation marks (`'...'`) or double quotation marks (`"..."`). Both methods are equally valid and produce the same type of string.
      </p>

      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Basic String Definition</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`print("Hello, Python!")
print('Hello, Python!')`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-3 mb-1">Quotes Inside Quotes</h3>
      <p className="mb-2">
        You can easily include quotation marks within a string, as long as the inner quotes do not match the type of quotes used to define the string itself.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`print("It's alright")          # Double quotes around, single quote inside
print("He is called 'Johnny'") # Double quotes around, single quotes inside
print('She said, "Hello!"')    # Single quotes around, double quotes inside`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. Assigning Strings to Variables</h2>
      <p className="mb-4">
        To store a string for later use, you assign it to a variable. This is done using the assignment operator (`=`), with the variable name on the left and the string literal on the right.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Assigning a String</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`my_greeting = "Welcome to Python Strings!"
print(my_greeting)`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Multiline Strings</h2>
      <p className="mb-4">
        When you need a string that spans multiple lines, you can use triple quotes. This can be three double quotes (`"""..."""`) or three single quotes (`'''...'''`). The line breaks and indentation within the triple quotes will be preserved in the string.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using Triple Double Quotes</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`long_paragraph = """This is the first line.
    This is the second line,
and this is the third line.
It preserves all the line breaks."""
print(long_paragraph)`}
        </code>
      </pre>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using Triple Single Quotes</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`poem_stanza = '''The quick brown fox
jumps over the lazy dog.
A classic pangram.'''
print(poem_stanza)`}
        </code>
      </pre>
      <p className="mb-4">
        **Note:** The line breaks in the resulting string will appear exactly as they are in your code within the triple quotes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Strings as Arrays (Indexing)</h2>
      <p className="mb-4">
        Like many other programming languages, strings in Python can be thought of as arrays (or sequences) of bytes representing Unicode characters. However, Python does not have a separate "character" data type; a single character is simply a string with a length of 1.
      </p>
      <p className="mb-4">
        You can access individual characters or parts of a string using **square brackets `[]`** and an index. Remember that Python uses **zero-based indexing**, meaning the first character is at index `0`, the second at `1`, and so on.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Accessing Characters by Index</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`my_string = "Hello, World!"
print(f"Character at position 0: {my_string[0]}")  # Output: H
print(f"Character at position 1: {my_string[1]}")  # Output: e
print(f"Character at last position: {my_string[-1]}") # Output: ! (negative indexing starts from the end)`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Looping Through a String</h2>
      <p className="mb-4">
        Since strings are iterable sequences (like arrays), you can easily iterate over their characters using a `for` loop. This allows you to process each character individually.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Looping Through Characters</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`word = "banana"
print("Characters in 'banana':")
for char in word:
  print(char)`}
        </code>
      </pre>
      <p className="mb-4">
        To learn more about `for` loops, refer to the <a href="#python-for-loops">Python For Loops chapter</a>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. String Length</h2>
      <p className="mb-4">
        To determine the number of characters in a string (its length), use the built-in `len()` function.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Example: Getting String Length</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`phrase = "Hello, World!"
string_length = len(phrase)
print(f"The length of '{phrase}' is: {string_length}") # Output: 13`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Checking for Substrings (`in` and `not in`)</h2>
      <p className="mb-4">
        Python provides convenient keywords to check if a specific substring (a phrase or character sequence) is present or not present within another string.
      </p>
      <h3 className="text-lg font-semibold mt-3 mb-1">Checking Presence (`in` keyword)</h3>
      <p className="mb-2">
        The `in` keyword returns `True` if the specified substring is found within the string, and `False` otherwise.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`main_text = "The best things in life are free!"
is_present = "free" in main_text
print(f"Is 'free' in the text? {is_present}") # Output: True

is_present_capital = "Free" in main_text # Case-sensitive
print(f"Is 'Free' in the text? {is_present_capital}") # Output: False`}
        </code>
      </pre>
      <h3 className="text-lg font-semibold mt-3 mb-1">Using `in` in an `if` Statement</h3>
      <p className="mb-2">
        This is particularly useful for conditional logic in your programs.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`main_text = "The best things in life are free!"
if "free" in main_text:
  print("Yes, 'free' is present in the text.")`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-3 mb-1">Checking Absence (`not in` keyword)</h3>
      <p className="mb-2">
        The `not in` keyword returns `True` if the specified substring is **not** found within the string, and `False` if it is present.
      </p>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`main_text = "The best things in life are free!"
is_absent = "expensive" not in main_text
print(f"Is 'expensive' NOT in the text? {is_absent}") # Output: True`}
        </code>
      </pre>
      <h3 className="text-lg font-semibold mt-3 mb-1">Using `not in` in an `if` Statement</h3>
      <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
        <code className="language-python">
{`main_text = "The best things in life are free!"
if "expensive" not in main_text:
  print("No, 'expensive' is NOT present in the text.")`}
        </code>
      </pre>
      <p className="mb-4">
        To learn more about `if` statements, refer to the <a href="#python-if-else">Python If...Else chapter</a>.
      </p>

      {/* NEW CONTENT STARTS HERE */}

      {/* 8. Slicing Strings */}
      <div id="string-slicing">
        <h2 className="text-xl font-semibold mt-4 mb-2">8. Slicing Strings</h2>
        <p className="mb-4">
          You can return a range of characters by using the slice syntax. This allows you to extract a portion (or "slice") of a string. You specify the start index and the end index, separated by a colon.
        </p>
        <p className="mb-4">
          The syntax is: `[start:end]`.
          <ul>
            <li>The <strong>start index</strong> is inclusive (the character at this index is included).</li>
            <li>The <strong>end index</strong> is exclusive (the character at this index is NOT included).</li>
          </ul>
          Remember that indexing starts at 0.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Slice from the Start</h3>
        <p className="mb-2">
          To slice from the beginning of the string up to (but not including) a specific index, you can omit the start index.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`b = "Hello, World!"
print(b[2:5]) # Output: llo
# This gets characters from index 2 up to (but not including) index 5`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Slice to the End</h3>
        <p className="mb-2">
          To slice from a specific index to the end of the string, you can omit the end index.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`b = "Hello, World!"
print(b[2:]) # Output: llo, World!
# This gets characters from index 2 all the way to the end`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Negative Slicing</h3>
        <p className="mb-2">
          You can use negative indexes to start the slice from the end of the string.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`b = "Hello, World!"
print(b[-5:-2]) # Output: orl
# This gets characters from index -5 (o) up to (but not including) index -2 (d)`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Slice with Step</h3>
        <p className="mb-2">
          You can also specify a third parameter, `step`, which determines how many characters to skip between each selected character. The syntax is `[start:end:step]`.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`my_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print(my_string[0:10:2]) # Output: ACEGI (every second character from index 0 to 9)
print(my_string[::3])   # Output: ADGJMPSVY (every third character from start to end)
print(my_string[::-1])  # Output: ZYXWVUTSRQPONMLKJIHGFEDCBA (reverses the string!)`}
          </code>
        </pre>
      </div>

      {/* 9. Modify Strings */}
      <div id="string-modify">
        <h2 className="text-xl font-semibold mt-4 mb-2">9. Modify Strings</h2>
        <p className="mb-4">
          In Python, strings are **immutable**, which means once a string is created, its content cannot be changed. However, you can perform operations that return *new* strings with the desired modifications. These operations often involve string methods.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: `upper()` Method</h3>
        <p className="mb-2">
          The `upper()` method returns a new string where all characters are converted to uppercase.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`a = "Hello, World!"
print(a.upper()) # Output: HELLO, WORLD!`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: `lower()` Method</h3>
        <p className="mb-2">
          The `lower()` method returns a new string where all characters are converted to lowercase.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`a = "Hello, World!"
print(a.lower()) # Output: hello, world!`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: `strip()` Method</h3>
        <p className="mb-2">
          The `strip()` method removes any whitespace (spaces, tabs, newlines) from the beginning or the end of a string.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`a = "  Hello, World!  "
print(a.strip()) # Output: "Hello, World!"`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: `replace()` Method</h3>
        <p className="mb-2">
          The `replace()` method replaces all occurrences of a specified substring with another substring. It returns a new string.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`a = "Hello, World!"
print(a.replace("H", "J")) # Output: Jello, World!
print(a.replace("World", "Python")) # Output: Hello, Python!`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: `split()` Method</h3>
        <p className="mb-2">
          The `split()` method splits the string into a list of substrings based on a specified separator (delimiter). If no separator is specified, it splits by any whitespace.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`a = "Hello, World!"
print(a.split(",")) # Output: ['Hello', ' World!'] (splits at the comma)

b = "apple banana cherry"
print(b.split()) # Output: ['apple', 'banana', 'cherry'] (splits by whitespace)`}
          </code>
        </pre>
      </div>

      {/* 10. Concatenate Strings */}
      <div id="string-concatenate">
        <h2 className="text-xl font-semibold mt-4 mb-2">10. Concatenate Strings</h2>
        <p className="mb-4">
          String concatenation is the process of joining two or more strings together to form a new, single string. In Python, the most common way to concatenate strings is using the `+` operator.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using the `+` Operator</h3>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`string1 = "Hello"
string2 = "World"

# Concatenate with a space in between
full_string = string1 + " " + string2
print(full_string) # Output: Hello World

# Concatenate directly
greeting = "Good"
time_of_day = "morning"
message = greeting + time_of_day
print(message) # Output: Goodmorning (note the lack of space)`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Concatenating Strings with Variables</h3>
        <p className="mb-2">
          You can concatenate strings with variables holding string values. Remember that you can only concatenate strings with other strings. If you try to concatenate a string with a number, you'll get an error unless you first convert the number to a string using `str()`.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`name = "Alice"
age = 30 # This is an integer

# Incorrect: results in a TypeError
# print("My name is " + name + " and I am " + age + " years old.")

# Correct: convert age to string
print("My name is " + name + " and I am " + str(age) + " years old.")
# Output: My name is Alice and I am 30 years old.`}
          </code>
        </pre>
        <p className="mb-4">
          For more complex string creations involving variables of different types, using f-strings or the `format()` method (discussed in the "Format Strings" section) is generally preferred as it's more readable and less error-prone.
        </p>
      </div>

      {/* 11. Format Strings */}
      <div id="string-format">
        <h2 className="text-xl font-semibold mt-4 mb-2">11. Format Strings</h2>
        <p className="mb-4">
          When you want to combine strings with numbers or other data types, or when you need more control over how variables are inserted into a string, Python's string formatting methods are invaluable. While direct concatenation with `+` works for strings, it's cumbersome for mixing types.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">11.1. The `format()` Method</h3>
        <p className="mb-2">
          The `format()` method allows you to embed values into a string using placeholders `{}`. It provides a flexible way to format strings, allowing you to control order, alignment, and data types.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`age = 36
txt = "My name is John, and I am {}"
print(txt.format(age)) # Output: My name is John, and I am 36

# Multiple placeholders
quantity = 3
item_no = 567
price = 49.95
my_order = "I want {} pieces of item {} for {} dollars."
print(my_order.format(quantity, item_no, price))
# Output: I want 3 pieces of item 567 for 49.95 dollars.

# Using index numbers (optional)
my_order_indexed = "I want {0} pieces of item {1} for {2} dollars."
print(my_order_indexed.format(quantity, item_no, price)) # Same output

# Using named indexes (more readable)
my_order_named = "I want {qty} pieces of item {item_num} for {prc} dollars."
print(my_order_named.format(qty=quantity, item_num=item_no, prc=price))
# Output: I want 3 pieces of item 567 for 49.95 dollars.`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">11.2. F-Strings (Formatted String Literals - Python 3.6+)</h3>
        <p className="mb-2">
          F-strings offer a more concise and readable way to embed expressions inside string literals. You prefix the string with an `f` (or `F`) and then place variable names or expressions directly inside curly braces `{}` within the string. F-strings are generally the preferred method for string formatting in modern Python.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`name = "Alice"
age = 25
job = "Engineer"

# Basic f-string
print(f"Hello, my name is {name} and I am {age} years old.")
# Output: Hello, my name is Alice and I am 25 years old.

# Embedding expressions
print(f"Next year I will be {age + 1} years old.")
# Output: Next year I will be 26 years old.

# F-string with formatting options (e.g., decimal places)
pi = 3.1415926535
print(f"Pi to two decimal places: {pi:.2f}") # Output: Pi to two decimal places: 3.14

# F-string with multiple variables and expressions
product = "Laptop"
price = 1200.50
tax_rate = 0.08
total_price = price * (1 + tax_rate)
print(Now use your brain to print below output)
# Output: The Laptop costs $1200.50. With 8% tax, the total is $1296.54.`}
          </code>
        </pre>
        <p className="mb-4">
          F-strings are highly recommended for their readability and power, especially for debugging and constructing complex output strings.
        </p>
      </div>

      {/* 12. Escape Characters */}
      <div id="string-escape-characters">
        <h2 className="text-xl font-semibold mt-4 mb-2">12. Escape Characters</h2>
        <p className="mb-4">
          In Python strings, an **escape character** is a backslash (`\`) followed by the character you want to insert. This allows you to include characters that are otherwise difficult or illegal to use directly within a string, such as quotation marks that match the string's delimiters, newlines, or tabs.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Escaping Quotes</h3>
        <p className="mb-2">
          To include a double quote inside a double-quoted string, or a single quote inside a single-quoted string, you must "escape" it with a backslash.
        </p>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`txt1 = "We are the so-called \\"Vikings\\" from the north."
print(txt1) # Output: We are the so-called "Vikings" from the north.

txt2 = 'It\\'s a beautiful day.'
print(txt2) # Output: It's a beautiful day.`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mt-3 mb-1">Common Escape Characters:</h3>
        <ul className="mb-4 list-disc list-inside">
          <li>`\'` Single Quote</li>
          <li>`\"` Double Quote</li>
          <li>`\\` Backslash</li>
          <li>`\n` New Line</li>
          <li>`\r` Carriage Return</li>
          <li>`\t` Tab</li>
          <li>`\b` Backspace</li>
          <li>`\f` Form Feed</li>
          <li>`\ooo` Octal value</li>
          <li>`\xhh` Hex value</li>
        </ul>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using Other Escape Characters</h3>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`print("Hello\\nWorld!") # New line
# Output:
# Hello
# World!

print("Hello\\tWorld!") # Tab
# Output: Hello   World!

print("C:\\\\Users\\\\John\\\\Documents") # Backslash (needs to be escaped itself)
# Output: C:\\Users\\John\\Documents

print("This is a \\bbackspace.") # Backspace (might erase previous character in console)
# Output (console specific, often): This is a backspace.

print("Unicode for 'A': \\u0041") # Unicode character (example)
# Output: Unicode for 'A': A`}
          </code>
        </pre>
      </div>

      {/* 13. String Methods (General Overview) */}
      <div id="string-methods">
        <h2 className="text-xl font-semibold mt-4 mb-2">13. String Methods</h2>
        <p className="mb-4">
          Python has a rich set of built-in methods that you can use on strings. These methods allow you to perform a wide variety of operations, such as changing case, searching for substrings, splitting, joining, and much more. Remember that string methods always return *new* strings, as strings in Python are immutable.
        </p>
        <p className="mb-4">
          You call a string method using the dot (`.`) notation after the string variable or literal: `my_string.method_name(arguments)`.
        </p>

        <h3 className="text-lg font-semibold mt-3 mb-1">Commonly Used String Methods (Beyond those for modifying strings):</h3>
        <ul className="mb-4 list-disc list-inside">
          <li><strong>`capitalize()`:</strong> Converts the first character to uppercase, and the rest to lowercase.</li>
          <li><strong>`count(substring)`:</strong> Returns the number of times a specified substring occurs in the string.</li>
          <li><strong>`find(substring)`:</strong> Searches the string for a specified value and returns the index of where it was found (first occurrence). Returns -1 if not found.</li>
          <li><strong>`index(substring)`:</strong> Similar to `find()`, but raises a `ValueError` if the value is not found.</li>
          <li><strong>`isalnum()`:</strong> Returns `True` if all characters in the string are alphanumeric (letters or numbers).</li>
          <li><strong>`isalpha()`:</strong> Returns `True` if all characters in the string are letters.</li>
          <li><strong>`isdigit()`:</strong> Returns `True` if all characters in the string are digits.</li>
          <li><strong>`startswith(prefix)`:</strong> Returns `True` if the string starts with the specified prefix.</li>
          <li><strong>`endswith(suffix)`:</strong> Returns `True` if the string ends with the specified suffix.</li>
          <li><strong>`join(iterable)`:</strong> Joins the elements of an iterable (e.g., list, tuple) with the string as the separator.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-3 mb-1">Example: Using Various String Methods</h3>
        <pre className="bg-[#0f0f0f] text-white p-4 rounded mb-6">
          <code className="language-python">
{`text = "hello world"
print(f"Original: '{text}'")

# capitalize()
print(f"Capitalized: '{text.capitalize()}'") # Output: Hello world

# count()
print(f"Count of 'o': {text.count('o')}") # Output: 2

# find()
print(f"Index of 'world': {text.find('world')}") # Output: 6
print(f"Index of 'xyz': {text.find('xyz')}")   # Output: -1

# isalnum(), isalpha(), isdigit()
num_str = "12345"
alpha_str = "Python"
mixed_str = "Pyth0n"
print(f"'{num_str}' is digit? {num_str.isdigit()}")      # Output: True
print(f"'{alpha_str}' is alpha? {alpha_str.isalpha()}")    # Output: True
print(f"'{mixed_str}' is alnum? {mixed_str.isalnum()}")    # Output: True

# startswith(), endswith()
url = "https://www.example.com"
print(f"Starts with 'https://'? {url.startswith('https://')}") # Output: True
print(f"Ends with '.org'? {url.endswith('.org')}")       # Output: False

# join()
my_list = ["apple", "banana", "cherry"]
joined_string = ", ".join(my_list)
print(f"Joined string: '{joined_string}'") # Output: apple, banana, cherry`}
          </code>
        </pre>
        <p className="mb-4">
          This is just a selection; Python's string methods are extensive. You can find a complete list in the official Python documentation.
        </p>
      </div>

      {/* 14. String Exercises (Placeholder) */}
      <div id="string-exercises">
        <h2 className="text-xl font-semibold mt-4 mb-2">14. String Exercises</h2>
        <p className="mb-4">
          Practice makes perfect! Work through these exercises to solidify your understanding of Python strings.
        </p>
        <div className=" p-4 rounded mb-4">
          <h3 className="text-lg font-semibold mb-2">Exercise 1: Basic String Operations</h3>
          <p>Given the string `s = "Python Programming"`, perform the following:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>Print the length of the string.</li>
            <li>Access and print the character at index 7.</li>
            <li>Slice the string to get "Python".</li>
            <li>Slice the string to get "Programming".</li>
            <li>Convert the entire string to uppercase and print it.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-4 mb-2">Exercise 2: String Manipulation</h3>
          <p>Given the string `message = "  Hello, World!  "`:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>Remove leading/trailing whitespace.</li>
            <li>Replace "World" with "Universe".</li>
            <li>Split the string by the comma and print the resulting list.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-4 mb-2">Exercise 3: Formatting and Checking</h3>
          <p>Given `item = "Laptop"` and `price = 999.99`:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>Use an f-string to print: "The Laptop costs $999.99." (formatted to two decimal places).</li>
            <li>Check if "Python" is present in the string "I love Python programming".</li>
            <li>Check if "Java" is NOT present in the string "I love Python programming".</li>
          </ol>
        </div>
        <p className="mt-4">
          (Here you would typically add a way for users to input their code and check solutions, possibly through an interactive platform or by providing solution links.)
        </p>
      </div>
    </>
  )
}

///






];

export default docs;
