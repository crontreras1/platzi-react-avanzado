import React, { useState } from "react";

function useLoading (initialLoading: boolean = false) {
  const [ isLoading, setIsLoading ] = useState(initialLoading)

  return {
    isLoading,
    setIsLoading
  }
}

type UserComponentProps = {
  name: string
}

const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>Hello, { name }! </p>

      <button onClick={ () => setIsLoading(true) }>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name='Crontreras1' />;
};
