import AddingInteractivity from "./AddingInteractivity";
import "./App.css";
import ClassComponentsDemo from "./class";
// when importing from a folder, it will look for the index file
// when importing a "default export", you can name it whatever you want
import DescribingTheUI from "./DescribingTheUI";
import ManagingState from "./ManagingState";

function App() {
  return (
    <div>
      {/* <DescribingTheUI /> */}
      {/* <ClassComponentsDemo /> */}
      {/* <AddingInteractivity /> */}
      <ManagingState />
    </div>
  );
}

export default App;
