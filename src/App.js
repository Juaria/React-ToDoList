import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoLists from './ToDoLists';
import { render } from '@testing-library/react';


const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

////////
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputEvent = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const results = Items.filter (Items => Items.toLowerCase().includes(search));
    setSearchResults(results);
  }, [search]);


//////////
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
       return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List </h1>
        <br />
        <input
          type="text" 
          placeholder="Add items" 
          value= {inputList} 
          onChange={itemEvent} 
        />
        <button onClick={listOfItems}> + </button>
        <br />

        <div className="search_bar">
          <input type="text" 
          placeholder="Search..."
          value={search}
          onChange={inputEvent}
          />
        
        </div>
        {searchResults.map(item => (
            <ol>{item}</ol>
          ))}


        <ol>
          {/*<li> {inputList} </li>*/}
          {Items.map((itemval, index) => {
            return <ToDoLists 
            key={index} 
            id={index}
            text={itemval} 
            onSelect={deleteItems} 
            />;
          })}
        
        </ol>
      </div>
    </div>
    </>
  );
  };
export default App;
