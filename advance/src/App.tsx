import AddingInteractivity from "./AddingInteractivity";
import "./App.css";
import ClassComponentsDemo from "./class";
// when importing from a folder, it will look for the index file
// when importing a "default export", you can name it whatever you want
import DescribingTheUI from "./DescribingTheUI";
import HOC from "./HOC";
import HookPlay from "./hooks/HookPlay";
import LearnUseEffect from "./LearnUseEffect";
import ManagingState from "./ManagingState";
import PaginationDemo from "./Pagination/Pagination";
import Performance from "./Performance";
import PracticeProblems from "./PracticeProblems";
import ReduxApp from "./ReduxApp";
import Routing from "./Routing";

function App() {
  return (
    <div>
      {/* <DescribingTheUI /> */}
      {/* <ClassComponentsDemo /> */}
      {/* <AddingInteractivity /> */}
      {/* <ManagingState /> */}
      {/* <LearnUseEffect /> */}
      {/* <PracticeProblems /> */}
      {/* <ReduxApp /> */}
      {/* <HOC /> */}
      {/* <HookPlay /> */}
      {/* <PaginationDemo /> */}
      {/* <Routing /> */}
      <Performance />
    </div>
  );
}

export default App;
