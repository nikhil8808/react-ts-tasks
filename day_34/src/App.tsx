import { useState, useOptimistic, useTransition } from "react";

export default function Counter() {
  const [count, setCount] = useState(6);
  const [isPending, startTransition] = useTransition();
  const [loading,setLoading] = useState(false);

  const [optimisticCount, addOptimisticCount] = useOptimistic(
    count,
    (state, newValue:number) => state + newValue
  );

  async function handleClick() {
    setLoading(true);

    startTransition(() => {
      addOptimisticCount(1); // forces re-render showing 7
    });
    console.log("Clicked, optimistic count:", optimisticCount);

    try {
            console.log("Clicked, optimistic count:", optimisticCount);
      await fakeServerUpdate();
      console.log("Clicked, optimistic count:", optimisticCount);
      setCount((c) => c + 1);
    } catch {
      // rollback automatic when re-render with unchanged count
      console.log("Update failed, rolling back");
      console.log("Count is still:", count, "optimisticCount:", optimisticCount);

    }finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Count: {optimisticCount}</h2>
      {loading && <h4>Loading...</h4>}
      <button onClick={handleClick} disabled={isPending}>
        +1
      </button>
    </div>
  );
}

async function fakeServerUpdate() {
  await new Promise((r) => setTimeout(r, 1000));
  throw new Error("Server failed");
}
