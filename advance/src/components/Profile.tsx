// Profile is considered a component that's pure 
// given the same input, it will always return the same output

// however if you want to add any side effects(eventually)
// you can use useEffect or event handlers

export default function Profile({ name, email }: any) {
  return (
    <div>
      <div>
        Profile{name}: {name}
      </div>
      <div>Email: {email}</div>
    </div>
  );
}
