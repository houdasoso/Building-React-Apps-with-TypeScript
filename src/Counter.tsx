import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
//Steps to Convert:
//Rename the file to .tsx:
//JSX with TypeScript must be in .tsx files.

//Define State Type:

//Create an interface to define the shape of the component’s state.//

//In this example, the state contains a single property: count, which is a number.

//Define Props Type:

//Since this component does not receive any props, an empty object {} is used as the props type.

//Apply Types to the Class Component:

//Use TypeScript’s generic syntax to specify the type of props and state when extending Component.

//The component will be defined as Component<PropsType, StateType>.

//Initialize the State with Type Annotation:

//Annotate the state property to match the previously defined state interface.

//This ensures that count is treated as a number and that the state cannot hold invalid values.

//Ensure the Event Handler is Typed Properly:

//The increment method modifies the state and should not require additional typing here, as the state is already typed.

//Leave JSX Unchanged:

//The render method remains the same, as TypeScript will infer types within JSX.

//Export the Component:

//The export syntax does not change; you continue to use export default.