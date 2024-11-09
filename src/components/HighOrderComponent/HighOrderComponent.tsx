import React from "react";

function withLoading<T extends object> (Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean } ) => {
    const { isLoading, ...rest } = props 
    return isLoading ? <p>Loading...</p> : < Component { ...rest as T } />
  }
}

type UserComponentProps = {
  name: string
}

const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  return <p>Hola, { name }!</p>
}

const UserWithLoading = withLoading(UserComponent)

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={ true } name='Crontreras1' />
  
      <UserWithLoading isLoading={ false } name='Crontreras1'/>
    </div>
  );
};
