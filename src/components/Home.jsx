
import React, { useEffect, useState } from 'react';
import Task from './Task';

const Home = () => {

  const initArr = localStorage.getItem('tasks') 
  ? JSON.parse(localStorage.getItem('tasks')) : [];

  const [tasks, setTask] = useState(initArr);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // to get all the input in array form
    setTask([...tasks, {   title, description  }]);
    setTitle('');
    setDescription('');
  }
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((value, i) => {
      // return all the values which is not deleted
      return i !== index;
    });
    console.log(filteredArr);
    setTask(filteredArr);
  }

  useEffect(() => {    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className='container'>
      <h1>Daily Goals</h1>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <textarea placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
        <button type="submit">ADD</button>
      </form>


      {tasks.map((item, index) => {
        return (
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
        )
      })}

    </div>
  )
}

export default Home;


//28:30