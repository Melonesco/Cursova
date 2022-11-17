const express = require("express");
const path = require('path');

const app = express();
app.use(express.json())

let id = 3;

const subjects = [
  {id: 1, text: 'This is the first message'},
  {id: 2, text: 'This is the second message'},
]

app.get('/api/subjects', (req, res) => {
  console.log('Get all subjects');
  res.json(subjects)
})

app.post('/api/subjects', (req, res) => {
  console.log('Add new subject')
  const body = req.body

  id++;

  const newSubject = {
    id: id,
    text: body.value
  }

  subjects.push(newSubject)

  res.json(newSubject);
})

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(5000, () => {
  console.log("Server is running");
});
