import React from "react";
import { nanoid } from "nanoid";
import "./Style.css";

function Header({
  todos,
  setTodos,
  inputValue,
  setInputValue,
  theme,
  setTheme,
}) {
  const handleChange = (e) => {
    setInputValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setTodos([
        ...todos,
        { text: inputValue, completed: false, id: nanoid() },
      ]);
    } else {
      alert("input Value cannot be blank");
    }
    setInputValue("");
  };

  const handleTheme = () => {
    if (!theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    setTheme((prevState) => !prevState);
  };

  return (
    <div className="header--wrapper">
      <div className="header--container">
        <h1 className="heading">todo</h1>
        <i
          onClick={handleTheme}
          className={theme ? "fas fa-moon" : "fas fa-sun"}
        ></i>
      </div>
      <form onSubmit={handleSubmit} className="form--container">
        <label htmlFor="todo"></label>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          id="todo"
          placeholder="Write your todo"
          value={inputValue}
        />
        <button type="submit">
          <i className="fas fa-check"></i>
        </button>
      </form>
    </div>
  );
}

export default Header;
