import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

import todoServices from "../Services/todoServices";
import IdoData from "../Types/todoTypes";

const TodoComponents: React.FC = () => {
  const { id } = useParams();
  const initalstate = {
    id: 0,
    todo: "",
    completed: false,
    userId: 5,
  };
  const [singleTodo, setSingleTodo] = useState<IdoData>(initalstate);
  useEffect(() => {
    if (id) GetToDoId(id);
  }, [id]);

  const updateTodo = async () => {
    let data = {
      completed: singleTodo.completed,
    };
    let updated: any = await todoServices.updateTodo(data, singleTodo.id!);
    console.log("updated", updated);
  };
  const GetToDoId = async (id: string) => {
    const getTodobyidData: any = await todoServices.getById(parseInt(id));
    if (getTodobyidData && getTodobyidData.status === 200) {
      setSingleTodo(getTodobyidData.data);
    }
    // console.log("getTodobyidData",getTodobyidData.)
  };

  console.log("id", singleTodo);
  return (
    <>
      <div className="form-check">
        <div className="form-group">
          <label htmlFor="title">Todo</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            required
            value={singleTodo.todo}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSingleTodo({ ...singleTodo, todo: e.target.value })
            }
            name="todo"
          />
        </div>

        <input
          className="form-check-input"
          type="checkbox"
          checked={singleTodo.completed}
          id="completed"
          onChange={() =>
            setSingleTodo({ ...singleTodo, completed: !singleTodo.completed })
          }
        />
        <label className="form-check-label" htmlFor="completed">
          IsCompleted
        </label>

        <button onClick={() => updateTodo()} className="btn btn-success">
          Submit
        </button>
      </div>
    </>
  );
};

export default TodoComponents;
