var productExceptSelf = function(nums) {
    let newarray = [];
    for(let x = 0;x<nums.length; x++){
        let multiplication = 1;
        for(let y =0;y<nums.length;y++){
            if(x === y){
                continue;
            }
            else{
                multiplication*=nums[y];
            }
        }
        newarray.push(multiplication);
    }
    return newarray;
};


productExceptSelf([1,2,3,4]);



// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).