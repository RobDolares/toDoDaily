const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser');
// Create app
const app = express();

//tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//static files
app.use(express.static('public'));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Initial list

const todos = [
  "wash the car"
];

app.get("/", function(req, res) {
  res.render('todos', {todos: todos});
});

app.post("/todos", function(req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

// Completed tasks list

const completed = [
""
];

app.get("/", function(req, res) {
  res.render('todos', {completed: completed});
});

app.post("/completed", function(req, res) {
  for (var i = 0; i < todos.length; i++) {
    if (req.body.completed === todos[i]) {
      completed.push(todos[i]);
      todos.splice(i, 1);
      res.redirect('/');
      console.log(completed);
    }
  }
})




app.listen(3000, function() {
  console.log('successfully began program');
})
