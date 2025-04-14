import React, { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(input);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={input}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.submitBtn} type="submit">
          <IoSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;