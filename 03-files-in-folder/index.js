const fs = require('fs'); 
//C:\HTML-builder\HTML-builder\03-files-in-folder\secret-folder
const path = require("path");
const allFile = path.join('03-files-in-folder',"secret-folder");
fs.readdir(allFile, (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("\nCurrent directory filenames:"); 
      files.forEach(file => { 
        fs.stat(path.join(allFile, file), (err, stats) => {
            if (!stats.isDirectory()){
            if (err) {
              console.error(err);
              return;
            }
            let sizeFile= stats.size;
            console.log(`${file.replace('.', '---')}---${sizeFile} byte`);}
          })
      }) 
    } 
  }) 

 