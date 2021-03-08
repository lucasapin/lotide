const assertEqual = require("./assertEqual")
const eqArrays = function(firstArr, secondArr) {
  if(firstArr.length !== secondArr.length){
    return false
  } else {
    for(var i = 0; i < firstArr.length; i++){
      if(firstArr[i] !== secondArr[i]){
    return false
  } 
}
  return true;
}
};

module.exports = eqArrays;

