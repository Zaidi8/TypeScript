const personn : {
    role: [number,string]
} = {
    role:[1,'string']
}
console.log(person.role)




//Deleting Duplicate Elements from the same Array
function removeDuplicates(nums: number[]): number {
    let count=1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i];
        count++
    }
    }
    return count;
    
};

//finding the placee of target element

function searchInsert(nums: number[], target: number): number {
    for(let i=0 ; i<nums.length ; i++){
        if(target<nums[i]){
            return i;
        }
        else if(nums[i]===target){
            return i
        }
        else if( (i+1)===nums.length){
            return i+1;
        }
        else if(nums[i]>target){
            return i-1;
        }
        else if(nums [i]<target&&nums[i+1]>target){
            return i+1;

        }
    }
    return 0;
};


//Function to convert a number to 32-bit binary number and then flip bits and print decimal number
function flippingBits(n: number): number {
    let bn=n.toString(2).padStart(32,'0').split('');
    let arrOfNumbers:number[];
    let result;
    arrOfNumbers=bn.map(Number);
    for(let i=0 ; i<arrOfNumbers.length;i++){
        arrOfNumbers[i]=Math.abs(arrOfNumbers[i]-1)
    }
    result=parseInt(arrOfNumbers.join(''),2)
    return result;
}