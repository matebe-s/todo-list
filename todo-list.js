 const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
      name: 'make dinner' ,
      dueDate: '2024-08-22',
      },{
        name: 'wash dishis' ,
        dueDate: '2024-08-31'
      }];

    renderTodo();

    function renderTodo(){
      localStorage.setItem('todoList', JSON.stringify(todoList));
  

   let todoListHTML = '';
        for(let i=0; i < todoList.length; i++){
        const todoObj = todoList[i];
       // const name=todoObj.dueDate;
        //const {name}=todoObj;
        const {name,dueDate} = todoObj;// use destructuring in this part
        const html= `
         <div>${name}</div> 
         <div>${dueDate}</div>
         <button onclick="
          todoList.splice(${i},1);
          renderTodo();
         " class="delete-btn">Delete</button>
           `;
        todoListHTML +=html;

      }

      document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
    }

    function addTodo(){
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;

      const inputDuedateElm=document.querySelector('.js-dueDate-input');
      const dueDate=inputDuedateElm.value;
      todoList.push({
       // name:name,
        //dueDate:dueDate
      name,
      dueDate});

      saveTodoList();
      inputElement.value = '';
      renderTodo();

      }

      function saveTodoList() {
        localStorage.setItem('todoList', JSON.stringify(todoList));
      }

