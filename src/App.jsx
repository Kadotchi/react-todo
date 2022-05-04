import React, { useState } from "react";
import "./styles.css";

import InputTodo from "./components/InputTodo";
import IncompliteTodo from "./components/IncompliteTodo";
import CompliteTodo from "./components/CompliteTodo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompliteTodos, setIncompliteTodos] = useState([]);
  const [compliteTodos, setCompliteTodos] = useState([]);

  //入力された文字をtodoTextにセットする。
  const onChangeTodoText = (event) => {
    console.log("onChangeTodoText");
    setTodoText(event.target.value);
  };
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

  // 戻す機能
  const onClickBack = (index) => {
    const newCompliteTodos = [...compliteTodos];
    newCompliteTodos.splice(index, 1);

    const newInCompliteTodos = [...incompliteTodos, compliteTodos[index]];
    setCompliteTodos(newCompliteTodos);
    setIncompliteTodos(newInCompliteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompliteTodo
        todos={incompliteTodos}
        onClickComplite={onClickComplite}
        onClickDelite={onClickDelite}
      />
      <CompliteTodo todos={compliteTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;
