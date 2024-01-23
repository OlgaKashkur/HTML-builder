const fs = require('fs');
const path = require('path');
//HTML-builder/04-copy-directory

const copyFolder = path.join(__dirname,'files');
const filesFolder =path.join(__dirname,'files-copy');

/*fs.rmdir(filesFolder, () => { 
    console.log("Start"); 
});*/
fs.readdir(filesFolder, (err,files) => {
	if (err) throw err;
	files.forEach(file => {
		fs.unlink(path.join(__dirname,"files-copy", file), err => {
		    if (err) throw err;
		});
	});
});

fs.readdir(copyFolder, (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
        fs.mkdir(filesFolder,{recursive: true},() => console.log('Folder created'));
        files.forEach(file => {
            fs.copyFile(path.join(__dirname,"files",file), path.join(__dirname,"files-copy",file),(err) => {
                if (err) throw err;
                });
        }) 
    } 
}) 
