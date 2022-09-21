function isPalindrome(word) {
  // Write your algorithm here
  const stringLength = word.length;
  const halfLength = Math.ceil(stringLength/2);
  const startHalf = word.substring(0,halfLength);
  const endHalf = word.substring(stringLength - halfLength);
  let endHalfBackward = "";
  for (element in endHalf) {
    endHalfBackward = endHalf[element] + endHalfBackward;
  };
  return (startHalf == endHalfBackward)
}


/* 
  Add your pseudocode here

  get length of the string
  get halflength, round up
  (if odd, then half the string round up
  if even, then half the string)
  construct the halflength endstring
  take last char, then second to last, until halflength
  compare with halflength frontstring
  if equal, then ispalendrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  //coustom tests:

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("peep"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("foobar"));
}

module.exports = isPalindrome;
