import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';

const ToDoLists = (props) => {

      
    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    };

    const btnClr = "#5eaaa8";
    const [bg, setBg] = useState(btnClr);
    const [num, setNum] = useState(1);
    
    const incNum = () => {
        if (num < 10){
        setNum(num + 1);
        }
        else { 
            setNum (1);
        }
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
            
            <button className="priorityBtn" 
            //onClick={bgChange} 
            onClick={incNum}> {num} 
            </button>
        </div>
    </>
    );
};

export default ToDoLists;
