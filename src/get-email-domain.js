const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let b = email.split('@')[1];  
  
    const reverse = email.split('').reverse().join('');
    console.log(reverse);
    let b = reverse.split('@')[0];
    let c = b.split('').reverse().join('');
  return c;

}



module.exports = {
  getEmailDomain
};
