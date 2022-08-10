'use strict';

const moment = require("moment");

/** 
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
*/

exports.footer = function (name) {
  return "Copyright " + moment().format('YYY') + " " + name + " All rights reserved";
}
