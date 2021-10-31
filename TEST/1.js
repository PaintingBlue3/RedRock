let arr = ['red', 'green', 'blue']
//使用for-in遍历
for(let item in arr) {
    //打印数组索引（数组的索引就是对象的键名）
    console.log(item);  //1  //2  //3
}
for(let item of arr) {
    //打印键值
    console.log(item);  //red  //yellow  //blue
}
console.table(arr);