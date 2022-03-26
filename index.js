// Write your algorithm here
//1. Create function with two parameters (1-array of ints, 2-int)
function hasTargetSum(array, target) {
//2. loop through array, summing current index with remaining indices producing sums for each pair
  let sum = 0;  
  for (let i = 0; i < array.length; i++){
      for(let j = i + 1; j <= array.length; j++){
        sum = array[i] + array[j];
    //3. If sum of pair matches int parameter, return true
        if (sum === target){
          return true;
          break;
        } 
      }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
*/
//Time-Complexity: Quadratic, O(n^2)
//Space-Complexity: Linear, O(n)
/* 
  Add your pseudocode here
  /*
  1. Create function with two parameters (1-array of ints, 2-int)
  2. loop through array, summing current index with remaining indices producing sums for each pair
  3. If sum of pair matches int parameter, return true
  */
 /*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
