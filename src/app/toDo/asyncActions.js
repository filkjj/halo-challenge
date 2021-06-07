import axios from 'axios';
import { 
    _getTodos, 
    _deleteTodos, 
    _updateTodoStatus, 
    _addNewToDo, 
    _deleteCompletedTodos,
    _markAllComplete
} from './actions'

export const getTodos = () =>{
    return async(dispatch) =>{
        try{
            const { data } = await axios.get('/todos');
            dispatch(_getTodos(data));
        }catch(err){
            console.log("error in todo reducer, getToDos", err)
        }
    }
}

export const deleteTodo = (toDoID) =>{
    return async(dispatch) =>{
        try{
            await axios.delete(`/todos/${toDoID}`)
            dispatch(_deleteTodos(toDoID))
        }catch(err){
            console.log("error in todo reducer, deleteTo", err)
        }
    }
}

export const updateTodoStatus = (updatedToDo) =>{
    return async(dispatch)=>{
        try{
            await axios.put(`/todos/${updatedToDo.id}`,updatedToDo);
            dispatch(_updateTodoStatus(updatedToDo.id,updatedToDo));
        }catch(err){
            console.log("error in todo reducer, updateTodoStatus", err)
        }
    }
}

export const addNewTodo = (newToDoText) =>{
    return async(dispatch)=>{
        try{
            const newToDo = {
                content:newToDoText,
                isDone:false
            };

            const { data } = await axios.post('/todos/',newToDo);
            dispatch(_addNewToDo(data));
        }catch(err){
            console.log("error in todo reducer, addNewTodo", err)
        }
    }
}

export const clearCompletedToDos = (toDoList) =>{
    return async(dispatch)=>{
        try{
            const toDosToDelete = toDoList.reduce((acc,toDo)=>{
                if(toDo.isDone){
                    acc.push(toDo.id);
                }
                return acc;
            },[])

            toDosToDelete.forEach(async toDoID=>await axios.delete(`/todos/${toDoID}`));

            dispatch(_deleteCompletedTodos());
        }catch(err){
            console.log("error in todo reducer, clearCompletedToDos", err)
        }
    }
}

export const markAllComplete = (toDoList) =>{
    return async(dispatch)=>{
        try{
            toDoList.forEach(async toDo=>{
                toDo.isDone = true;
                await axios.put(`/todos/${toDo.id}`,toDo)
            })
            console.log(toDoList)
            dispatch(_markAllComplete(toDoList))
        }catch(err){
            console.log("error in todo reducer, markAllComplete", err)
        }
    }
}
