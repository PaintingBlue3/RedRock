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
function fafactorial1(n){
    let result = 1;
    while(1)
    {
        if(n==1)
        {
            return result;
        }
        else
        {
            result *= n;
            n--;
        }
    }
}
console.log(fafactorial1(3))