import { Component, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import todoServices from "../Services/todoServices";
import IdoData from "../Types/todoTypes";
import "../App.css";
type Props = {};
type State = {
  TodoList: Array<IdoData>;
  currentIndex: number;
};

export default class Todolist extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      TodoList: [],
      currentIndex: 0,
    };
  }
  componentDidMount() {
    this.GetAllTodo();
  }
  async GetAllTodo() {
    let finalResponse: any = await todoServices.getAllTodo();
    if (finalResponse && finalResponse.status === 200) {
      this.setState({ TodoList: finalResponse.data.todos });
    }
  }
  async deleteTodo(id: number, index: number) {
    this.setState({ currentIndex: index });
    let finalResponse = await todoServices.deleteTodo(id);
    if (finalResponse && finalResponse.status === 200) {
      alert("Deleted successfully");
      this.GetAllTodo();
      this.setState({ currentIndex: 0 });
    }
  }
  render() {
    return (
      <>
        <div className="">
        <div className="col-md-6">
          <h4>Todo List</h4>

          <ul className="list-group">
            {this.state.TodoList &&
              this.state.TodoList.map((todo: IdoData,index:number) => (
                <li
                  className={
                    "list-group-item "
                    +
                   (index === this.state.currentIndex ? "active" : "")
                  }
                  onClick={() => this.setState({currentIndex:index})}
                  key={index}
                >
                  {todo.todo}
                  <button type="button" className="btn btn-danger ml-" onClick={() => this.deleteTodo(todo.id!, index)}>Delete</button>
                  <Link
                to={"/update/" + todo.id!}
                className="badge badge-warning"
              >
                Edit
              </Link>
                  {/* <button type="button" className="btn btn-primary ml-5">Update</button> */}
                </li>
              ))}
          </ul>
</div>

        </div>
      </>
    );
  }
}

