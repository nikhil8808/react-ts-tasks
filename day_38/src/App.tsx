import axios from "axios";
import { useState, useTransition } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://api.escuelajs.co/api/v1/files/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event: any) => {
          const percent = Math.round((event.loaded * 100) / (event.total || 1));

          // Make progress update a low-priority state transition
          startTransition(() => {
            setProgress(percent);
          });
        },
      });
      alert("Upload successful!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleChange} />
      <div>
        {isPending ? (
          <p>Updating progress...</p>
        ) : (
          <p>Progress: {progress}%</p>
        )}
      </div>
    </div>
  );
}

export default App;
