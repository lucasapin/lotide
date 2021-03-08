const {eqArrays} = require('./index');
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1).sort();
  let object2Keys = Object.keys(object2).sort();
  let object1Values = Object.values(object1).sort();
  let object2Values = Object.values(object2).sort();

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else if (eqArrays(object1Keys, object2Keys) && eqArrays(object1Values, object2Values)) {
    return true;
  }
};

module.exports = eqObjects;