/* ------这是循环--------*/
function fafactorial(n){
    let result = 1;
    for(let i = 1; i <= n ; i++){
        result *= i;
    }
    return result;
}

console.log(fafactorial(5));


/*------这是递归--------*/
// function factorial1 (n){
//     return n === 1 || n === 0 ? 1 : n*factorial1(n-1);
// }


function factorial1(n){
    while(1)
    {
        if( n === 1 || n === 0 )
        {
            return n;
        }
        else
        {
            return n * factorial1(n - 1);
        }
    }
}
console.log(factorial1(6));