import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReduce = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Counter:{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
