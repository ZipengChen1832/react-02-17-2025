import Profile from "./Profile";

// default import and named import
// import sum, {subtract} from "../util/sum";

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

// after transpiling, our code looks something like this:
// this is very hard to read and write
// JSX is syntactic sugar for React.createElement

// function _1() {
//   return Ll.jsxs("div", {
//     children: [
//       Ll.jsx("h2", { children: "Gallery" }),
//       Ll.jsx(Ic, { name: "John Doe", email: "123@gmail.com" }),
//       Ll.jsx(Ic, { name: "Jane Doe", email: "123@gmail.com" }),
//       Ll.jsx(Ic, { name: "John Smith", email: "123@gmail.com" }),
//     ],
//   });
// }
