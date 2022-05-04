import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px"
};

const CompliteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style} className="complite-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos &&
          todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default CompliteTodo;
