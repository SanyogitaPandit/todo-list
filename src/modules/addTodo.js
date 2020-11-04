import Todo from './todo';
import loadHome from "./home";

const addTodo = () => {

  const todoMod = document.getElementById('newPanel');
  
  const todoProjList = document.getElementById('todo-proj');
 
    while (todoProjList.options.length > 0) {
        todoProjList.remove(0);
    }
 

  const projList = JSON.parse(localStorage.getItem("MyProjects"));
  let projTitles = projList.map(x => x.title);
  projTitles.forEach(proj => {
      let projoption = new Option(proj);
      todoProjList.add(projoption);
  });  

  todoMod.style.display = 'block';
  const close = document.getElementById('close');    
  close.onclick = (event) => {
      todoMod.style.display = 'none';
  };

  const submit = document.getElementById('todoSubmit');
  submit.onclick = (event) => {

      // Inputs
      const titleInput = document.getElementById('title-input');
      const descInput = document.getElementById('desc-input');
      const lowPrioInput = document.getElementById('low-prio');  
      const medPrioInput = document.getElementById('med-prio');  
      const highPrioInput = document.getElementById('high-prio');  
      const noteInput = document.getElementById('note-input');
      const dueInput = document.getElementById('due-input');  

      
      // Grab selected priority
      const selectedPrio = [lowPrioInput, medPrioInput, highPrioInput]
          .filter((input) => input.checked === true);
      // Add todo with given inputs
      if (selectedPrio.length === 0) {
          selectedPrio.push(lowPrioInput);
      }

      //grab respective project
      const found = projTitles.find(element => element == todoProjList.value);
                  
      createTodo(found, titleInput.value, descInput.value, selectedPrio[0].value,
          noteInput.value, dueInput.value);                    

      // Clean input fields
      titleInput.value = '';
      descInput.value = '';
      selectedPrio[0].checked = false;
      noteInput.value = '';
      dueInput.value = '';
      todoMod.style.display = 'none';  
      
      const main = document.getElementById('main');
      main.removeChild(main.childNodes[0]);
      main.appendChild(loadHome());
  }
}

const createTodo = (proj, title, description, priority, notes, due) => {
  // Make new Todo
  const newTodo = new Todo(proj, title, description, priority, notes, due);  
  // Save todo and rerender ACTIVE_PROJECT todos  
  newTodo.save();  
};

export default addTodo;