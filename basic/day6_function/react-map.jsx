// explaining why i don't like seeing students using implicit return
// while rendering a list in React

// implicit return, but you can't debug by adding console.log
<div>
  {people.map((person) => (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
    </div>
  ))}
</div>;

// explicit return, you can debug by adding console.log
<div>
  {people.map((person) => {
    console.log(person.name);
    return (
      <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
      </div>
    );
  })}
</div>;
