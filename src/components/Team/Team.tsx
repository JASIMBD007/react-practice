import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    setTeam(team + 1);
  };

  return (
    <div style={{ border: "2px solid orange" }}>
      <h1>Players:{team}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
