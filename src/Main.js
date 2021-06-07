import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './app/actions'
import App from './App'
import InputToDoForm  from './InputToDoForm'
import FilterList from './FilterList'
import './scss_styles/Main.scss';

const Main = () =>{

    const dispatch = useDispatch();
    const toDoList = useSelector(state=>state.toDos);
    const [isFiltering, setIsFiltering] = useState(false)
    const [filterdList, setFilterdList] = useState([])
    useEffect(()=>{
        dispatch(getTodos())
    },[])
    
  return(
    <>
        <h1>todos</h1>
        <div className="mainscreen">
            <InputToDoForm toDoList={toDoList}/>
            {isFiltering ? <App toDoList={filterdList} /> : <App toDoList={toDoList} />}
            <FilterList toDoList={toDoList} setFilterdList={setFilterdList} setIsFiltering={setIsFiltering}/>
        </div>
    </>
  )

}

export default Main;
