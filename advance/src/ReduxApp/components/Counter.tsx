import { useAppDispatch, useAppSelector } from "../store";

export default function Counter() {
  const count = useAppSelector((state) => state.count);
  //   const { count } = useSelector((state) => state);
  console.log("Counter rerender");
  //   console.log("todos", todos);
  //   console.log("count", count);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch({ type: "add", meta: { delay: 1000 }  });
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
