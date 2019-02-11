#! /usr/bin/env node

//This is a little strange looking, but will allow us to run our code globally as well as from the command line later.

const fs = require("fs");

fs.readFile(__dirname + "/info.json", "utf8", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    return data;
  }
});

// fs(short for File System) is part of node that we are bringing in to allow us to more easily and reliably read what directory we are in.
// __dirname is the directory we are currently in
//     readFile gives us back the contents of a file.We are passing in 3 arguments...
// the file we want to read
// the way to encode that file
// a callback function
// if there is an error getting the file, print the error, else, print out and return the content.
