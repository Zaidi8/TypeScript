// // function isPalindrome(x: number): boolean {
// //     let n:number;
// //     let str:string;
// //     let newarr:string[]=[];
// //     str=x.toString();
// //     newarr=str.split(" ");
// //     newarr=newarr.reverse();
// //     str=newarr.join()
// //     if(x=== +str&&x>0)
// //         return true
// //     else
// //         return false
// //     }
    
// function romanToInt(s: string): number {
//     const I=1,V=5,X=10,L=50,C=100,D=500,M=1000;
//     let str:string[]=[]
//     let result;Number
//     str=s.split('')
//     return +str[0]
// };

function isValid(s: string): boolean {
    let arr=s.split('');
    let c1=0,c2=0;
    for (let i=0 ; i<arr.length ; i++){
    arr.pop();
    if(arr.pop()==='('||'['||'{'){
    c1++;
    }
    else if(arr.pop()===')'||']'||'}'){
    c2++;
}
}
    if(c1===c2){
        return true;
    }
    else
    {
        return false;
    }
};