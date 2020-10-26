import Todo from './todo';

const addTodo = (title, description, priority, notes, due) => {
  // Make new Todo
  const newTodo = new Todo(title, description, priority, notes, due);

  // Save todo and rerender ACTIVE_PROJECT todos
  newTodo.save();  
};

export default addTodo;