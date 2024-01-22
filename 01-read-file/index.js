const fs = require("fs");
const path = require("path");
const partText = path.join("01-read-file", "text.txt");
//console.log(partText);

const stream = fs.createReadStream(partText, "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data));
stream.on("error", (error) => console.log("Error", error.message));

/*fs.readFile(
    partText,
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    },
  );*/
  
