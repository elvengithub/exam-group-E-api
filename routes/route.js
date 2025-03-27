import { Router } from 'express'

export const router = Router()

const exams = [
  { id: 1, name: 'Math Exam', date: '2025-03-25' },
  { id: 2, name: 'Science Exam', date: '2025-03-26' }
];

router.get('/exam-group', (req,res) => 
  res.json({message: "Group E API"})
)

router.get('/exams', (req, res) =>
  res.json(exams)
)
