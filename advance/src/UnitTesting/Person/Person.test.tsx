import { describe, expect, test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Person from ".";

describe("Person", () => {
  test("should render a name", () => {
    render(<Person name="Jack" age={11} friends={["John", "Mike"]} />);

    const name = screen.getByText("Jack");
    expect(name).toBeInTheDocument();
  });

  test("should hide friends when hideFriends is true", () => {
    render(
      <Person
        name="Jack"
        age={11}
        friends={["John", "Mike"]}
        hideFriends={true}
      />
    );

    const friends = screen.queryByText("Friends:");
    expect(friends).not.toBeInTheDocument();
  });
});
