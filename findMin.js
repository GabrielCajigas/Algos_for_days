var findMin = function(nums) {
    let min = nums[0];
    for(let x =0;x<nums.length;x++){
         min = Math.min(min,nums[x]);
    }
    return min;
};


console.log(findMin([3,4,5,1,2]));

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.