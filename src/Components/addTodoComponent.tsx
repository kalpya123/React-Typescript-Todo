import { Component, ChangeEvent } from "react";
import todoServices from "../Services/todoServices";
import IdoData from "../Types/todoTypes";
import { addTodos, IAddTodos } from "../Api/TodoApi";
import { connect } from "react-redux";
import { RootState } from "../store";


type Props = {
  addTodos:(payload:IAddTodos) => void 
};
type State = IdoData & {
  submitted: boolean;
};

 class AddTodo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangetodo = this.onChangetodo.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.state = {
      userId: 5,
      todo: "",
      completed: false,
      submitted: false,
    };
  }
  onChangetodo(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: e.target.value });
  }
  async saveTutorial() {
    const data: IdoData = {
      todo: this.state.todo,
      //   completed:this.state.completed,
      userId: this.state.userId,
    };
  await this.props.addTodos(data)
    // let response = await todoServices.createTodo(data);
    // console.log("response", response);
    // if (response && response.status === 200) {
    //   this.setState({
    //     todo: response.data.todo,
    //     userId: response.data.userId,
    //     submitted: true,
    //   });
    // }
  }
  newtodo() {
    this.setState({
      userId: 5,
      todo: "",
      completed: false,
      submitted: false,
    });
  }
  render() {
    return (
      <>
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newtodo}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo"
                  required
                  value={this.state.todo}
                  onChange={this.onChangetodo}
                  name="todo"
                />
              </div>

              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  todosdata: state.todos.AllTodo
});

const mapDispatchToProps = {
  addTodos
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
