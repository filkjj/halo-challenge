import { 
    GET_TODOS, DELETE_TODO, 
    UPDATE_TODO_STATUS, 
    ADD_NEW_TODO,
    DELETE_COMPLETED_TODOS, 
    MARK_ALL_COMPLETE
} from './actions'

export const toDoReducer = (state=[], action) =>{
    switch(action.type){
        case GET_TODOS:
            return action.toDoData.sort((a,b)=>a.id>b.id);
        case DELETE_TODO:
            return state.filter(ele=>ele.id !== action.toDoID);
        case UPDATE_TODO_STATUS:
            return state.reduce((acc,ele)=>{
                if(ele.id===action.toDoID){
                    acc.push(action.updatedToDo);
                }else{
                    acc.push(ele);   
                }
                return acc;
            },[])
        case ADD_NEW_TODO: 
            return [...state,action.newToDo];
        case DELETE_COMPLETED_TODOS:
            return state.filter(ele=>!ele.isDone);
        case MARK_ALL_COMPLETE:
            return [...action.toDoList];
        default:
            return state;
    }
}