import React from "react";

export default function Foo({ id, person, name }) {
  const [state, setState] = useState(0);

  return <div>Foo</div>;
}


function useState(){
    return [0, () => {}];
}