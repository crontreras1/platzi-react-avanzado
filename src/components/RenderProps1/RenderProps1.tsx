import React from "react";
import { render } from "react-dom";

type ChildComponentProps = {
  render: (name: string) => JSX.Element
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name:string = 'Crontreras1'

  return (
    <div>
      { render(name) }
    </div>
  );
};

export const ParentComponent = () => {
  return (
    < ChildComponent render={ name => <p>Hola, { name }!</p> } />
  );
};
