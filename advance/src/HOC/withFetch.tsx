import React from "react";
// takes in a component as an argument and returns a new component

// it's used to reuse state and lifecycle logics between components
export default function withFetch(OldComponent: React.ComponentType) {
  return class NewComponent extends React.Component {
    state = {
      data: null,
      loading: true,
    };

    componentDidMount() {
      // this.setState({ loading: true });
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => this.setState({ data }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    render() {
      const { loading, data } = this.state;

      return <OldComponent {...this.props} loading={loading} data={data} />;
    }
  };
}

// function debounce(func: Function, delay: number = 1000) {
//   // takes in a function and returns a new function
//   // that will only be called after a certain amount of time has passed

//   let timeout: NodeJS.Timeout;
//   return function (...args: any[]) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const sayHi = debounce(() => console.log("hi"));
// const sayHi2 = debounce(() => console.log("hi 2"));
