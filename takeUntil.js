const takeUntil = function(array, callback) {
  // console.log(callback());
  const results = [];
  for(let item of array){
    if(callback(item)){
      return results;
    } else {
      results.push(item);
    }
  }
  //if no item in the array satisfies the condition
  return results;
  }  // ...

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);