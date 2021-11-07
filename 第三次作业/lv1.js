let obj = {
  name : "peppa pig",
  age : 4
}

//以下在定义复制函数
function copy(woqu){
  let obj2 = {};
  for(let a in woqu){
    obj2[a] = woqu[a];
  }
  return obj2;
}

// 以下定义一个新函数
function azhe(name1){
  let obj = {};
  for(let i in name1){
    obj[i] = name1[i];
  }
  return obj;
}
//再定义一个新函数
function woqu(num1){
  let obj = num1;
  return obj;
}

let obj2 = copy(obj);
let obj3 = azhe(obj);
let obj4 = woqu(obj);
/*
console.log(obj2);
console.log(obj3);
console.log(obj4);
这是我拿来试值的
*/

let arr = [];
arr.push(obj,obj2,obj3,obj4);
console.table(arr);
