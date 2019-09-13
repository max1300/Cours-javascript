(function () {
  var todos = [];
  
  var todoService = {};
  
  todoService.getTodos = function () {
    return todos;
  }
  
  todoService.addTodo = function (title, callback) {
    // Création du nouveau task
    var newTodo = {
      id: todos.length + 1,
      isDone: false,
      title: title,
    }
    
    // Ajout au tableau
    todos.push(newTodo);
    
    // Appelle du callback avec le nouveau
    callback(newTodo)
  }
  
  todoService.resetAllTodos = function (callback) {
    todos = [];
    callback();
  }
  
  todoService.updateTodo = function (id, checked, callback) {
    var todo = todos.find(function (todo) {
      return todo.id === id;
    });
    
    if (!todo) {
      console.error('Todo to update does not exist id :', id);
    }
    
    todo.isDone = checked;
    
    callback(todo);
  }
  
  window.todoService = todoService;
  
})()
