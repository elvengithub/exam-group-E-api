import express from 'express'
import {router }from './routes/route.js'

const app = express()


app.use(bodyParser.json()); 
let exams = [
  { id: 1, name: 'Math Exam', date: '2025-03-25' },
  { id: 2, name: 'Science Exam', date: '2025-03-26' }
];

app.use('/', router)
//COMMENT FOR CONFLICT
app.listen(3000, () => {
  console.log('Server running on port : 3000')
})