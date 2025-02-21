const robotPrototype = {
  face: "square",
  eyes: "circle",
};

// all of the robot instances will have the properties of robotPrototype
const robot1 = {
  mouth: "diamond",
  //  demonstration purpose only, do not do this at home
  __proto__: robotPrototype,
};
const robot2 = {
  ears: "arrows",
  __proto__: robotPrototype,
};
const robot3 = {
  mouth: "circle",
  __proto__: robotPrototype,
};
const robot1a = {
  mustache: "straight",
  __proto__: robot1,
};
const robot1b = {
  beard: "curly",
  __proto__: robot1,
};

// console.log("robot1", robot1.face);
// console.log("robot1", robot1.mouth);
// console.log("robot2", robot2.ears);
// console.log("robot1a", robot1a.face);
// console.log("robot1a", robot1a.mouth);
// console.log("robot1a", robot1a.mustache);
// console.log("robot1a", robot1a.beard);
// console.log("robot1a", robot1a.ears);

