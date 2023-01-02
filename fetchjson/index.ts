import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {


  const wedo = response.data as Todo;

    const ID = wedo.id;
    const title = wedo.title;
    const completed = wedo.completed;

    logTodo(ID, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The TODO with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `)
}