import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
 //Code 01: Functional Component (Greeting)
 //Steps to Convert:
//Rename the file to .tsx://
//TypeScript with JSX syntax requires the file extension to be .tsx instead of .js or .jsx.

//Define Prop Types:

//Create an interface to describe the expected props of the component.

//In this case, the component expects a name prop, which is a string.

//Apply the Interface to the Component:

//Use the React.FC (FunctionComponent) type to annotate the component.

//This allows you to enforce that the component receives props matching the defined interface.

//Ensure JSX and logic stay the same:

//Only the types are added; the rendering and logic of the component remain unchanged.

//Export the Component:

//The export statement remains the same, as TypeScript supports ES module syntax.