const express = require("express");
const app = express();

const examGroupRouter = require("./routes/examGroup");

app.use("/exam-group", examGroupRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
