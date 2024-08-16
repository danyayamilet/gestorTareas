import {getTask} from "./task";

//funcion para mostrarle al usuario las tareas
export const renderTask = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const task = getTasks ();
    task.forEach((task)=>{
        const li =document.createElement("li");
        li.setAttribute("data-id", task.id);

        //Añadir clase solo si esta completada 
        if(task.completed == true){
          li.classList.add("completed");
        }
        li.innerHTML = `
        ${task.text}
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${task.completed == true ? "Deshacer" : "Completar"} </button>
        `;

        taskList.appendChild(li);
      });
};