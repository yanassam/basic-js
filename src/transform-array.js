const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here 
  if (Array.isArray(arr)===false){return new Error('arr parameter must be an instance of the Array!');}
  else{
  let array2=[];
  let skip= false;
  for (let i = 0; i < arr.length; i++){
    if (skip===true) {continue;}
  else  if(arr[i]==='--double-next'){array2.push(arr[i+1]);}    
   else if(arr[i]==='--double-prev'){array2.push(arr[i-1]);}
    else if(arr[i]==='--discard-prev'){array2.splice([i-1],1);}
    else if(arr[i]==='--discard-next'){skip===true;}
    
     else {array2.push(arr[i])

  }
  } 
  return array2;}
}

module.exports = {
  transform
};
