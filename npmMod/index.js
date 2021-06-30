const chalk = require("chalk");
//const { default: validator } = require("validator");
const validator = require("validator");
//console.log(chalk.underline.red("Amrinder singh"));
const res = validator.isEmail('amrinder@.com');
const res1 = validator.isNumeric('31321321');
//console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));
console.log(res1 ? chalk.green.inverse(res1): chalk.red.inverse(res1));