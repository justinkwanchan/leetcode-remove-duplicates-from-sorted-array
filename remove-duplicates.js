const removeDuplicates = array => {
  let repeatCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      if (array[i] === array[i - 1]) {
        repeatCount++;
      } else if (repeatCount > 0) {
        array.splice(i - repeatCount + 1, repeatCount);
        i = i - repeatCount + 1;
      }
    }
  }

  return array;
};

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(`Array 1: ${removeDuplicates(nums1)}`);
console.log(`Array 2: ${removeDuplicates(nums2)}`);

/* Sample input code */

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
