import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers";

export default function Counter() {
  const count = useSelector((state: IRootState) => state.count);
  //   const { count } = useSelector((state) => state);
  console.log("Counter rerender");
  //   console.log("todos", todos);
  //   console.log("count", count);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "add" });
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
