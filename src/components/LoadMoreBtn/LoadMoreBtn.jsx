import React from "react";
import s from "./LOadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className={s.LoadMoreWrapper}>
    <button className={s.LoadMoreBtn} onClick={onClick}>
      Load more...
    </button>
  </div>
);

export default LoadMoreBtn;