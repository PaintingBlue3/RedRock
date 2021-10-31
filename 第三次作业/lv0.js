let obj = new Object();
obj.name = 'only';
obj.age = 100;
console.log(obj);
// 原来不能创两个obj，那我怎么做作业（泣）
let obj1 = {
    name: 'only',
    age: 21
}
console.log(obj1);
// 竟然换个名字就好了吗
/*使用构造函数创建对象*/
function pig(){
    this.name = 'peppa pig';
    this.age = 4;//佩奇几岁啊
}
let a = new pig();
console.log(a);