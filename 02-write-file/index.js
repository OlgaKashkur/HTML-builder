
  const fs = require("fs");
  const path = require("path");
  const { stdin, stdout } = process;
  const notes =  path.join("02-write-file", "notes.txt");
  const word = fs.WriteStream(notes);
  
  fs.writeFile(
     path.join("02-write-file", "notes.txt"),
     "",
     (err) => {
      if (err) throw err;
      stdout.write("Please write a word: ");
    },
  );

  stdin.on ('data',(e) => {
    if(e.toString().trim()==="exit"){
        stdout.write("Bye");
        process.exit() 
    }
    word.write(e);
  });
  //https://nodejs.org/api/process.html#event-exit   Signal events
  
  process.on('SIGINT', () => stdout.write("Bye") && process.exit());

