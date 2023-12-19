const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //1.
  if(!Array.isArray(members)){
    return false;
  }

  let str = '';
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      str += members[i].trim().slice(0, 1).toUpperCase();
    }
  }

  return str.split('').sort().join('');
  //2.
  // if(!Array.isArray(members)){
  //   return false;
  // }

  // const resultArr = [];
  // members.map(item => {
  //   if(typeof item === 'string'){
  //     resultArr.push(item.trim().slice(0, 1).toUpperCase());
  //   }
  // });

  // return resultArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
