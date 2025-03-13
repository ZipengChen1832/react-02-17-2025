import Gallery from "../components/Gallery";
import Foo from "../components/Foo";
import List from "./List";

export default function DescribingTheUI() {
  return (
    <div>
      <h1>Describing the UI</h1>
      {/* <Gallery /> */}
      {/* <Foo
        str="a"
        num={1}
        bool={true}
        func={() => console.log("clicked")}
        null={null}
        undefined={undefined}
        // for any calculation, we can use the curly braces
        // g={"abc".charAt(0)}
        strCalc={`Clicked for ${1 + 1} times`}
        arr={["a", "b", "c"]}
        obj={{ a: 1, b: 2 }}
        style={{ color: "red" }}
      >
        <div>Children</div>
      </Foo> */}
      <List />
    </div>
  );
}
