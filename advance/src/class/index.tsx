import { Component } from "react";
import { ClassCounter, FnCounter } from "./Counter";

export default class ClassComponentsDemo extends Component {
  state = {
    isShown: true,
  };

  toggleVisibility = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility.bind(this)}>
          {this.state.isShown ? "Hide" : "Show"} components
        </button>
        {this.state.isShown && (
          <div>
            {/* <FnCounter /> */}
            <ClassCounter name="Class Counter" />
          </div>
        )}
      </div>
    );
  }
}
