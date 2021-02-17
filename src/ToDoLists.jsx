import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';

const ToDoLists = (props) => {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    };
  
    return (
    <>
        <div className = "todo_style">
            <i 
                className="fa fa-times" 
                aria-hidden="true" 
                onClick={() => {
                    props.onSelect(props.id);
                }}
            />

            <span onClick={cutIt}>
                <CheckIcon className="checkIcon"/>
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none"}}> 
            {props.text} 
            </li> 
        </div>
    </>
    );
};

export default ToDoLists;