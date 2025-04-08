import React from "react";
import Posts, { NormallyPosts } from "./Posts";

export default function HOC() {
  return (
    <div>
      <h2>HOC</h2>
      <Posts />
      {/* <NormallyPosts /> */}
    </div>
  );
}
