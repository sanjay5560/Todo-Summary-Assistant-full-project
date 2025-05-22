const express = require('express');
const cors = require('cors');
require('dotenv').config();

const todosRouter = require('./routes/todos');
const summarizeRouter = require('./routes/summarize');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/todos', todosRouter);
app.use('/summarize', summarizeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
