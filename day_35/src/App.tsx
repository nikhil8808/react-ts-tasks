import { useState, useOptimistic, startTransition } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    string[],
    string
  >(messages, (state, newMessage) => [...state, newMessage]);

  const handleAddMessage = async () => {
    if (inputValue.trim() === "") return;

    const currentMessage = inputValue;
    setInputValue("");

    // ✅ 1. Show the optimistic message immediately
    startTransition(() => {
      addOptimisticMessage(currentMessage);
    });

    try {
      // ❌ 2. Simulate async failure (after 2s so you can see it)
      await new Promise((resolve, reject) => {
        setTimeout(() => reject("Server error!"), 2000);
      });

      // ✅ 3. If success: commit real message
      setMessages((prev) => [...prev, currentMessage]);
    } catch (error) {
      console.error("API failed, rolling back:", error);

      // 🧹 4. Rollback manually (reset base to actual)
      // This tells React: "remove the optimistic layer"
      setMessages((prev) => [...prev]);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Message App</h1>
      <textarea
        placeholder="Type your message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={handleAddMessage}>Add Message</button>

      <h2>Messages:</h2>
      <ul>
        {optimisticMessages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
