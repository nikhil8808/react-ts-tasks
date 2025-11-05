import { useState, useEffect, useSyncExternalStore } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  // Subscription function for useSyncExternalStore
  const listeners = new Set<() => void>();
  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getSnapshot = () => messages;

  const liveMessages = useSyncExternalStore(subscribe, getSnapshot);

useEffect(() => {
  const socket = new WebSocket("wss://echo.websocket.org");

  socket.onopen = () => console.log("Connected to WebSocket!");
  socket.onmessage = (event) => setMessages(prev => [...prev, event.data]);
  socket.onerror = (err) => console.error("WebSocket error:", err);
  socket.onclose = () => console.log("WebSocket closed");

  return () => {
    socket.onmessage = null;
    socket.close();
  };
}, []);




  return (
    <div>
      {liveMessages.length > 0 &&
        liveMessages.map((message, index) => <div key={index}>{message}</div>)}
    </div>
  );
}

export default App;
