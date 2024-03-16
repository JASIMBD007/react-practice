import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

// Define the type for the data structure
interface FriendType {
  id: number;
  name: string;
  username: string;
  email: string;
  // include other fields as necessary
}

export default function Friends() {
  // Use the FriendType for the state
  const [friends, setFriends] = useState<FriendType[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div style={{ border: "2px solid blue" }}>
      <h1>Friends: {friends.length}</h1>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
