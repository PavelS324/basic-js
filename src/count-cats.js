const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(Array) {
  /*throw new NotImplementedError('Not implemented');*/
  /*// remove line with error and write your code here*/
  let namberCats = 0;

  for (let i = 0; i < Array.length; i++) {
    arr2 = Array[i];

    for (let ii = 0; ii < arr2.length; ii++) {
      
      if (arr2[ii] == "^^") {
        namberCats += 1;
      }
    }
  }

  return namberCats
}

module.exports = {
  countCats
};
