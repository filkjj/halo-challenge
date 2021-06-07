export const GET_TODOS = "GET_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS";
export const MARK_ALL_COMPLETE = "MARK_ALL_COMPLETE";


export const _getTodos = (toDoData) =>{
    return {
        type: GET_TODOS,
        toDoData
    };
};

export const _deleteTodos = (toDoID) =>{
    return {
        type: DELETE_TODO,
        toDoID
    };
};

export const _updateTodoStatus = (toDoID,updatedToDo) =>{
    return {
        type: UPDATE_TODO_STATUS,
        toDoID,
        updatedToDo
    };
};

export const _addNewToDo = (newToDo) =>{
    return {
        type : ADD_NEW_TODO,
        newToDo
    };
};

export const _deleteCompletedTodos = () =>{
    return {
        type: DELETE_COMPLETED_TODOS
    };
};

export const _markAllComplete = (toDoList) =>{
    return{
        type: MARK_ALL_COMPLETE,
        toDoList
    };
};