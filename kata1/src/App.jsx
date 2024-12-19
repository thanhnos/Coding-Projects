import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [maskedWord, setMaskedWord] = useState("");

  function handleMask() {
    const maskLength = Math.max(0, input.length - 4);
    const masked = "#".repeat(maskLength) + input.slice(-4);
    setMaskedWord(masked);
  };

  return (
    <div>
      <h2>Mask Your Word</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleMask}>Mask Word</button>
      {maskedWord && (
        <div>
          <strong>Masked Word:</strong> {maskedWord}
        </div>
      )}
    </div>
  );
};

export default App;