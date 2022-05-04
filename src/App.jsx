import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompliteTodos, setIncompliteTodos] = useState(["aaaa", "bbbb"]);
  const [compliteTodos, setCompliteTodos] = useState(["bbbb"]);

  //入力された文字をtodoTextにセットする。
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //TODOを追加する時の処理
  const onClickAdd = () => {
    if (todoText === "") return;
    //スプレッド構文を使って新しい配列を作成
    const newTodos = [...incompliteTodos, todoText];
    setIncompliteTodos(newTodos);
    setTodoText("");
  };

  //　完了機能
  const onClickComplite = (index) => {
    // 未完了のTodoから削除
    const newIncompliteTodos = [...incompliteTodos];
    newIncompliteTodos.splice(index, 1);
    // 新しい完了TODOの配列を生成
    const newCompliteTodos = [...compliteTodos, incompliteTodos[index]];
    setIncompliteTodos(newIncompliteTodos);
    setCompliteTodos(newCompliteTodos);
  };

  //　削除機能
  const onClickDelite = (index) => {
    const newTodos = [...incompliteTodos];
    // 指定したインデックスの要素を削除
    newTodos.splice(index, 1);
    setIncompliteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplite-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/*マップを処理*/}
          {incompliteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplite(index)}>完了</button>
                {/* 関数に引数を渡したい解きはアロー関数で渡す。 */}
                <button onClick={() => onClickDelite(index)}>削除</button>
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
              <div key={todo} className="list-row">
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
