let obj = new Object();
obj.name = 'only';
obj.age = 100;
console.log(obj);
let obj1 = {
    name: 'only',
    age: 21
}
console.log(obj1);
/*使用构造函数创建对象*/
function pig(){
    this.name = 'peppa pig';
    this.age = 4;//佩奇几岁啊
}
let a = new pig();
console.log(a);