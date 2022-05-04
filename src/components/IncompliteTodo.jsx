import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px"
};

const IncompliteTodo = (props) => {
  const { todos, onClickComplite, onClickDelite } = props;
  return (
    <div style={style} className="incomplite-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/*todosがnullの時は実行しない*/}
        {todos &&
          todos.map((todo, index) => {
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
  );
};

export default IncompliteTodo;
