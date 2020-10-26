function Project(title, todos = []) {
    this.id = Math.random().toString(36).slice(2); // Random proj id
    this.title = title;
    this.todos = todos;

    this.save = () => {
        const projArr = JSON.parse(localStorage.getItem("MyProjects"));
        projArr.push(this);
        localStorage.setItem("MyProjects", JSON.stringify(projArr));
    }
  }
  
  // Add todoID to todos list
  Project.prototype.addTodo = function addTodo(todo) {
    this.todos.push(todo.id);
  };
  
  export default Project;