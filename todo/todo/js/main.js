var app = {
  init: function () {
    
    // Ajout des handlers sur les boutons du formulaire
    this.addFormsListeners();
    
    // dessine l'interface
    this.displayTodos();
  },
  addFormsListeners: function () {
    
    var self = this;
    
    var form = document.getElementById('todo-form');
    form.onsubmit = function (event) {
      // event.preventDefault();
      todoService.addTodo(event.target['todo-title'].value, function (newTodo) {
        var container = self.getListContainer();
        container.appendChild(self.createTodoItem(newTodo));
        event.target['todo-title'].value = '';
      });
    }
    
    form.onreset = function (event) {
      // event.preventDefault();
      todoService.resetAllTodos(function () {
        var container = self.getListContainer();
        container.remove();
        
        self.displayNoTodos(false);
      })
    }
  },
  displayTodos: function () {
    var self = this;
    
    var todos = todoService.getTodos();
    
    if (todos.length !== 0) {
      var lis = todos.map(function (todo) {
        return self.createTodoItem(todo);
      });
      
      var container = this.getListContainer();
      lis.forEach(function (li) {
        container.appendChild(li);
      })
    } else {
      this.displayNoTodos(false);
    }
  },
  createTodoItem: function (todo) {
    var li = document.createElement('li');
    
    // CheckBox
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.isDone;
    checkbox.addEventListener('change', function (event) {
      todoService.updateTodo(todo.id, event.target.checked, function (todoUpdated) {
        var label = document.getElementById('title-' + todoUpdated.id);
        if (todoUpdated.isDone) {
          label.classList.add('todo__checked');
        } else {
          label.classList.remove('todo__checked');
        }
      })
    });
    
    // Label
    var label = document.createElement('span');
    label.setAttribute('id', 'title-' + todo.id)
    label.innerText = todo.title;
    if (todo.isDone) {
      label.classList.add('todo__checked');
    }
    
    li.appendChild(checkbox);
    li.appendChild(label);
    
    return li;
  },
  getListContainer: function () {
    var containerId = 'todo-container';
    var container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('ul');
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      
      this.displayNoTodos(true);
    }
    return container;
  },
  displayNoTodos: function (hidden) {
    
    if (typeof hidden !== 'boolean') {
      throw new Error('Argument error: display must be a boolean')
    }
    document.getElementById('label-no-todo').hidden = hidden;
  }
}

app.init();
