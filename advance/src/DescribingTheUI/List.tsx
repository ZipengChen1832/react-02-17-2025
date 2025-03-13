import { Fragment } from "react";

export const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
    age: 10,
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
    age: 20,
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
    age: 30,
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
    age: 40,
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
    age: 50,
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function List() {
  return (
    <div>
      <h2>List</h2>
      {people
        .filter((person) => person.age > 20)
        .map((veryLongVariableNameForPerson) => {
          // the key should be added to the outermost element
          // empty tags are used to wrap multiple elements and don't add any extra layer of HTML

          // when possible, use destructuring to make the code more readable
          const { id, name, profession, accomplishment, age } =
            veryLongVariableNameForPerson;
          return (
            <Fragment key={id}>
              <div>Name: {name}</div>
              {/* <div>Professional: {profession}</div> */}
              {/* <div>Accomplishment: {accomplishment}</div> */}
              <div>Age: {age}</div>
            </Fragment>
          );
        })}

      {/* please be aware the following uses implicit return */}
      {/* thus you could not console.log or write other logics inside */}
      {/* {people.map((person) => (
        <Fragment key={person.id}>
          <div>Name: {person.name}</div>
          <div>Professional: {person.profession}</div>
          <div>Accomplishment: {person.accomplishment}</div>
        </Fragment>
      ))} */}
    </div>
  );
}
