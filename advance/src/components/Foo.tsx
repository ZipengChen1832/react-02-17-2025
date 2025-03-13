export default function Foo(props: any) {
  const sayHi = () => console.log("hi");
  const obj = { a: 1, b: 2 };

  return (
    <div>
      <h3>Foo</h3>
      {/* {props.children} */}
      {/* <div>{0 && <div>Trueeee</div>}</div> */}
      <button onClick={sayHi}></button>
    </div>
  );
}
