const mods = require('./firstmodule')

console.log('output '+mods.mylib('ibukota', 'indonesia'))
const opr = mods.myfunc;

console.log('plus '+opr.plus(8, 9));