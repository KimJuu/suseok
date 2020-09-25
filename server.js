var express = require('express');

var indexRouter = require('./routes/index');
var qnaRouter = require('./routes/qnaRout');

var app = express();

app.use('/', indexRouter);
app.use('/qnaregister', qnaRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));