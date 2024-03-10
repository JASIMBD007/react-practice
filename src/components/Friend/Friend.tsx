export default function Friend({ friend }) {
  const { name, username, email } = friend;
  console.log(friend);
  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Name:{name}</h3>
      <h4>Username:{username}</h4>
      <h5>Email:{email}</h5>
    </div>
  );
}
