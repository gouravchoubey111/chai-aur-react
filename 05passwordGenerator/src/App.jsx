import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // alert("Password copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl px-6 py-5 my-10 bg-gray-900 text-orange-500">
      <h1 className="text-white text-2xl font-semibold text-center mb-5">Password Generator</h1>

      <div className="flex shadow-lg rounded-lg overflow-hidden mb-5 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-gray-700 text-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-y-3 text-sm">
        <div className="flex items-center justify-between">
          <label htmlFor="rangeInput">Length: {length}</label>
          <input
            id="rangeInput"
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-2/3"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
