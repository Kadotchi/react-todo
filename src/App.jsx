import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompliteTodos, setIncompliteTodos] = useState(["aaaa", "bbbb"]);
  const [compliteTodos, setCompliteTodos] = useState(["bbbb"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplite-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompliteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complite-area">
        <p className="title">完了のTODO</p>
        <ul>
          {compliteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
