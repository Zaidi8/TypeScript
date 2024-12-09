"use strict";
const personn = {
    role: [1, 'string']
};
console.log(person.role);
//Deleting Duplicate Elements from the same Array
function removeDuplicates(nums) {
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}
;
//finding the placee of target element
function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            return i;
        }
        else if (nums[i] === target) {
            return i;
        }
        else if ((i + 1) === nums.length) {
            return i + 1;
        }
        else if (nums[i] > target) {
            return i - 1;
        }
        else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        }
    }
    return 0;
}
;
