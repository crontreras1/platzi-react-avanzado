import React, { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode
}

const fruits: string[] = ['Apple 🍎', 'Graps 🍇', 'Orange 🍊']

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [ data ] = useState<string[]>(fruits)

    return(
        <ul>{ render(data) }</ul>
    )
};

export default ParentComponent;
