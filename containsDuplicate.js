var containsDuplicate = function(nums) {
    let dictionary = {};
    for(let x =0;x<nums.length;x++){
        if (dictionary[nums[x]]){
            return true
        }
        else{
            dictionary[nums[x]] = 1
        }
    }
    return false;
};




containsDuplicate([1,2,3,4,5,6,7,1]);