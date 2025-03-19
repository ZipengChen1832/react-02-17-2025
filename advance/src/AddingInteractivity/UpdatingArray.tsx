import { useState } from "react";

const uuid = crypto.randomUUID.bind(crypto);

const examplePeople = [
  { id: uuid(), name: "Alice", salary: 1000 },
  { id: uuid(), name: "Bob", salary: 1000 },
  { id: uuid(), name: "Charlie", salary: 1000 },
];

export default function UpdatingArray() {
  const [people, setPeople] = useState(examplePeople);

  const addPerson = () => {
    // This doesn't work because
    // 1. we're mutating the state directly
    // 2. "new" state and "old" state are the same reference

    // names.push("David");
    // setNames(names);

    // Right approach
    setPeople([
      ...people,
      {
        id: uuid(),
        name: "David",
        salary: 1000,
      },
    ]);
  };

  const deletePerson = (id: string) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const raiseSalary = (id: string) => {
    const newPeople = people.map((person) => {
        return person.id === id ? {
            ...person,
            salary: person.salary + 1000,
        } : person

    //   if (person.id === id) {
    //     // bad: mutating the state directly
    //     // person.salary += 1000;
    //     return {
    //       ...person, // copy all properties
    //       salary: person.salary + 1000,
    //     };
    //   } else {
    //     return person;
    //   }
    });

    setPeople(newPeople);
  };

  return (
    <div>
      <h3>Array as state </h3>
      <button onClick={addPerson}>Add "David"</button>
      <ul>
        {people.map((person) => {
          const { id, name, salary } = person;
          return <li key={id}>
              <span>{name}</span>
              <div>Salary: {salary}</div>
              <button onClick={() => raiseSalary(id)}>Add salary</button>
              <button onClick={() => deletePerson(id)}>Delete</button>
            </li>
          ;
        })}
      </ul>
    </div>
  );
}
