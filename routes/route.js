import { Router } from 'express'

export const router = Router()

const exams = [
  { id: 1, name: 'Math Exam', date: '2025-03-25' },
  { id: 2, name: 'Science Exam', date: '2025-03-26' }
];

router.get('/exam-group', (req,res) => 
  res.json({message: "Group F API"})
)

router.get('/exams', (req, res) =>
  res.json(exams)
)

router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const updatedData = req.body;

  let exam = exams.find(e => e.id === examId);
  if (exam) {
    exam.name = updatedData.name || exam.name;
    exam.date = updatedData.date || exam.date;
    res.json(exam);
  } else {
    res.status(404).json({ error: 'Exam not found' });
  }
});


router.post('/exams', (req, res) => {
  const newExam = req.body;
  newExam.id = exams.length + 1; 
  exams.push(newExam);
  res.status(201).json(newExam);
});
module.exports = router;