// Import required modules
const readline = require("readline");
const express = require('express');
const app = express();
const fs = require('fs');





// Constants
const port : number = 1003;



// File sender

function sendJS (file : String) {

// This is JavaScript, not TypeScript btw.
eval(`


var ${file} = "";

fs.readFile("assets/${file}.js", "utf8", (error, patched${file}) => {
${file} = new String(patched${file});
})


app.use(express.static("dist"));
app.get("/${file}.js", (req, res) => {
    res.type("js").send(${file}.toString());
});



`);
}




// -- BEGIN GAME FILES --

sendJS("bro"); // bro.js
sendJS("G"); // G.js
sendJS("sup"); // sup.js
sendJS("yo"); // yo.js
sendJS("main"); // main.js

// -- END GAME FILES --





// Notify us that Patcher is now running
console.log(`[Patcher] Running Patcher at http://localhost:${port}`);





// --- BEGIN DASHBOARD ---

const dashboard = (`
[Patcher]
The Craftnite.io file modifier runs along, listening on port ::${port}
Patcher Dashboard:

    [X] - Shut down Patcher
    [R] - Reload files
`);


// Add keypress listener and send the dashboard
app.listen(port, () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    console.log(dashboard);
});




// On Keypress
process.stdin.on("keypress", (str, key) => {
    // Key name
    const { name, ctrl } = key;

    // If it's [x] or [ctrl + c], then exit Patcher.
    if (name === "x" || (name === "c" && ctrl)) {
        console.log("[Patcher] Exiting Patcher...");
        process.exit();
    }

    // If it's [r], then reload the files.
        if (name === "r") {
            console.log("[Patcher] Reloading files...");
            // Coming Soon
        }

});

// --- END DASHBOARD ---