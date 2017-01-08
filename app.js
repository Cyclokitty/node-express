const express = require('express');
const app = express();

// basic routing pattern:
// app.METHOD(PATH, HANDLER)
// app is the instance of express
// METHOD is an http request method, in lowercase
// PATH is a path on the server
// HANDLER is the function executed when the route is matched
app.get('/', (req, res)=> {
  res.send('This is Laura\'s World!');
});

app.get('/:sequence', (req, res) => {
  const typed = req.params.sequence;
  res.send(`You typed ${typed} into the address bar.`);
});

app.use((req, res, next)=> {
  res.status(404).send("...sorry nothing here. Go back.")
})

// set port to either localhost:3000 or prepare setting up for heroku
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
