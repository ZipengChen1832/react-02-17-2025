import React, { useState } from "react";

export default function VeryNaiveRouting() {
  const [currPage, setCurrPage] = useState(0);

  const pages = [
    { name: "Page 1", Component: Page1 },
    { name: "Page 2", Component: Page2 },
    { name: "Page 3", Component: Page3 },
    { name: "Page 4", Component: Page4 },
    { name: "Page 5", Component: Page5 },
  ];

  const page = pages[currPage];
  const PageComponent = page.Component;

  return (
    <div>
      <nav>
        {pages.map((page, index) => (
          <div key={page.name} onClick={() => setCurrPage(index)}>
            {page.name}
          </div>
        ))}
      </nav>
      {<PageComponent />}
    </div>
  );
}

function Page1() {
  return <h2>Page 1</h2>;
}
function Page2() {
  return <h2>Page 2</h2>;
}
function Page3() {
  return <h2>Page 3</h2>;
}
function Page4() {
  return <h2>Page 4</h2>;
}
function Page5() {
  return <h2>Page 5</h2>;
}
