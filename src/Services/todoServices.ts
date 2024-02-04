import https from "../httpcommon";

import IdoData from "../Types/todoTypes";

class TodoList {

    getAllTodo(){
    return https.get<Array<IdoData>>("todos");
    }

    getById(id:number)
    {
        return https.get<IdoData>("todos/"+id);
    }
    createTodo(data:IdoData)
    {
        return https.post("todos/add",data)
    }
    updateTodo(data:IdoData ,id:number)
    {
        return https.put("todos/"+id,data)
    }
    deleteTodo(id:number)
    {
        return https.delete("todos/"+id)
    }

}

export default new TodoList();