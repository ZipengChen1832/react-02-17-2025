import React from "react";

export default function Notes() {
  return (
    <div>
      <ul>
        <h2>How to measure performance</h2>
        <li>Web vitals: LCP, INP, CLS</li>
        <li>Tools: lighthouse, sentry, etc</li>
      </ul>
      <ul>
        <h2>Ways to improve the performance</h2>
        <li>Code splitting & lazy loading</li>
        <li>CDN</li>
        <li>Optimize images</li>
        <li>Pagination</li>

        <li>Horizontal Scaling & Load Balancer</li>
        <li>Database: sharing, indexing, primary & replica nodes, etc</li>
      </ul>
      <ul>
        <h2>Optimize on the application level</h2>
        <li>React.memo to prevent unnecessary rerendering</li>
        <li>useMemo to memoize expensive calculations</li>
        <li>
          Good coding practice: avoid unnecessary state and useEffect, do
          cleanups, write efficient code
        </li>
      </ul>
    </div>
  );
}
