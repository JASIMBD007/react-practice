import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div style={{ border: "2px solid green" }}>
      <h1>User:{user.length}</h1>
    </div>
  );
}
