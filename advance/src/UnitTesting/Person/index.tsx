export interface PersonProps {
  name: string;
  age: number;
  friends: string[];
  hideFriends?: boolean;
}

export default function Person({
  name,
  age,
  friends,
  hideFriends = false,
}: PersonProps) {
  return (
    <div>
      <div>
        <b>{name}</b>
      </div>
      <p>Age: {age}</p>
      {!hideFriends && (
        <ul>
          <p>Friends:</p>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
