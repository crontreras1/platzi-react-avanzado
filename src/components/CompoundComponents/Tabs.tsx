import React, { useState, ReactElement, ReactNode } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [ activeIndex, setActiveindex ] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveindex(index)
  }

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  )

  return (
    <div className={classes.Tabs}>
      <ul>
        {
          tabElements.map((child, index) => (
            <li 
              key={ index } 
              className={ `${index === activeIndex ? classes.TabActive : ''}` }
              onClick={ () => handleTabClick(index) }
            >
              { child.props.label }
            </li>
          ))
        }
      </ul>

      <p className={ classes.tabContent }>
        { tabElements[activeIndex] }
      </p>
    </div>
  );
};

export default Tabs;
