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

app.get("/", function (req, res) {
  res.render('todos', { todos: todos });
});

app.post("/todos", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

// Completed tasks list

const completed = [
    todos
];

app.get("/", function (req, res) {
  res.render('todos', { todos:todos });
});

app.post("/completed", function (req, res) {
  completed.push(req.body.todo);
  res.redirect('/');
})



// for (var i = 0; i < todos.length; i++) {
//   if (req.body) {
//
//   }
// }




app.listen(3000, function() {
  console.log('successfully began program');
})










//
// res.render(todos, {key:value})
