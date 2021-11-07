// console.log('interface'[0].toUpperCase());
// console.log('interface'[0].toUpperCase());


/*
const add = a =>{
    return ++a;
}
console.log(add(1));



const sum = function(a,b){
    return a + b; 
}

*/
// let name = prompt('Who is the god of FrontEnd?')
// showChoice = name === 'lomirus' ? () => alert('You are right!!!') : () => alert('Wrong!!!')
// showChoice()
/*
function pow(x, n) {
    let result = 1;
  
    // 在循环中，用 x 乘以 result n 次
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(pow(2, 3)); // 8
  */

/*
  function pow(x, n) {
    if (n == 1)
      return x;
    else
      return x * pow(x, n - 1);
  }
  
  alert( pow(2, 3) ); // 8*/


  /*console.log([...'露露姐姐俺的超人']); //[ "露", "露", "姐", "姐", "俺", "的", "超", "人" ]*/

  let user = { name: "John" };
let admin = user; // 复制引用

console.log(user === admin) // true

user.age = 100;
console.log(admin.age) // true