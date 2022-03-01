function findFirstDuplicate(arr) {
  const compArr = []
  for (let i=1;i<arr.length;i++){
    const arrSlice = arr.slice(0,i);
    debugger
    let match = arrSlice.find(num => num === arr[i]);
    debugger
    if (match !== undefined){
        return match
    } 
  }
  return -1
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 7");
  console.log("=>", findFirstDuplicate([7, 7, 0, 9, 9, 7, 34]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Problem - find the first duplicated number in an array of numbers; compare the first number in the array to the rest of the numbers; if it matches any, return that number. THEN, compare the second number to the rest of the numbers (but not the first because we did that).
//So the number SHOULD NOT be compared to itself, or it will return. So we need to iterate from the next number to the end of the array(index + 1 through array.length-1);
//SO we take the first element of the array, and compare it a slice of index + 1(which needs to increse) to Array.length - 1; sounds like a For loop.
//; if no matches are found, return -1 (will need use either "false"; or "If (such-and-such === undefined")
// This functions takes in an array
//for each number of the array
  //find the first number in the array
  //compare that number to a slice of the remaining array
    //if that number matches any of the remaining numbers(nextindex through array.leghth)
    //return that number
    //NO MATCH FOUND, return -1
