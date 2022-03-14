import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useRequest from "./hooks/use-request";

function App() {
  const [tasks, setTasks] = useState([]);


  const {isLoading, error, sendRequest: fetchTasks} = useRequest();

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);
  //
  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-course-3d084-default-rtdb.firebaseio.com/tasks.json'
  //     );
  //
  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }
  //
  //     const data = await response.json();
  //
  //     const loadedTasks = [];
  //
  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }
  //
  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const transformTasks = tasksObj => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({url:'https://react-course-3d084-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
