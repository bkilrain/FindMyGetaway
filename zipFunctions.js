const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const AdmZip = require("adm-zip");
const zip = new AdmZip();

const functionsReadPath = path.resolve("./functions");
const functionsWritePath = path.resolve("./functions-build");

fs.mkdirSync("functions-build");

// for each directory in ./functions
fs.readdirSync(functionsReadPath).forEach(p => {
  // get the function file (*.js)
  const file = fs
    .readdirSync(path.join(functionsReadPath, p))
    .filter(file => file.endsWith(".js"))
    .pop();

  const dir = path.join("functions", p);
  // install function dependencies
  exec(`cd ${dir} && npm install`, (err, stdout, stderr) => {
    if (err) {
      console.log("ERROR", err);
      return;
    }
    // create archive of function file + node_modules
    const writeFilePath = path.join(
      functionsWritePath,
      file.replace(".js", ".zip")
    );
    zip.addLocalFolder(dir);
    zip.writeZip(writeFilePath);
    console.log(`Successfully archived function ${file} at ${writeFilePath}`);
  });
});
