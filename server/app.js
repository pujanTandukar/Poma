// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var router = express.Router();

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use("/api", router);

router.get("/", function(req, res) {
 res.json({ message: "API Initialized!"});
});
//
// //adding the /comments route to our /api router
// router.route(‘/comments’)
//  //retrieve all comments from the database
//  .get(function(req, res) {
//  //looks at our Comment Schema
//  Comment.find(function(err, comments) {
//  if (err)
//  res.send(err);
//  //responds with a json object of our database comments.
//  res.json(comments)
//  });
//  })
//
//  //post new comment to the database
//  .post(function(req, res) {
//  var comment = new Comment();
//  //body parser lets us use the req.body
//  comment.author = req.body.author;
//  comment.text = req.body.text;



module.exports = app;
