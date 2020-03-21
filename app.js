const fs = require("fs");
const mkdirp = require("mkdirp");
const inquirer = require("inquirer");

inquirer
  .prompt({
    name: "route",
    Input: { type: "confirm" },
    message: "Do you want API-routing?"
  })
  .then(data => {
    buildRoutes(data.route);
  });

function buildRoutes(x) {
  console.log(x);
  mkdirp("./routes").then(made => {
    if (x) {
      mkdirp("routes/api-routes").then(x => console.log(x));
    }
    console.log("made", made);
  });
}
