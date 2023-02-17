import React, { useState } from "react";
import Footer from "./Footer";

export default function Main(props) {
  const [item, newItem] = useState("");
  const [update, setUpdate] = useState([...props.lists]);

  const [state, setState] = useState(new Array(update.length).fill(false));

  function addItem(e) {
    newItem(e.target.value);
  }

  function handleChange(e) {
    if (e.key === "Enter") {
      setUpdate([
        ...update,
        { id: Math.floor(Math.random() * 1000), task: item }
      ]);
      setState([...state, false]);
      newItem("");
    }
  }

  function deleteItems(e) {
    const newList = update.filter((xx) => xx.id != e.target.id);
    setUpdate(newList);
  }

  const handleToggle = (position) => {
    const updatedState = state.map((item, index) =>
      index === position ? !item : item
    );
    setState(updatedState);
  };

  function clearAll() {
    setUpdate([]);
  }

  return (
    <section className="main">
      <header className="header">
        <h1>todos</h1>
        <form>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={addItem}
            onKeyDown={handleChange}
            value={item}
          />
        </form>
      </header>

      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {update.map((items, index) => {
          return (
            <li key={index} className={!state[index] ? "view" : "completed"}>
              <div className="view">
                <input
                  id={items.id}
                  className="toggle"
                  type="checkbox"
                  onChange={() => handleToggle(index)}
                  checked={state[index]}
                />
                <label>{items.task}</label>
                <button
                  id={items.id}
                  className="destroy"
                  onClick={deleteItems}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>

      {update.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{update.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/" onClick={console.log("deneme")}>
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearAll}>
            Clear completed
          </button>
        </footer>
      )}
    </section>
  );
}
