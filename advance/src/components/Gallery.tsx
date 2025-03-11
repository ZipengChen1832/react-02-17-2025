import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      {/* option + shift + up/down */}
      {/* alt + shift + up/down */}
      <Profile name="John Doe" email="123@gmail.com" />
      <Profile name="Jane Doe" email="123@gmail.com" />
      <Profile name="John Smith" email="123@gmail.com" />
    </div>
  );
}
