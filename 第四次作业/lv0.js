const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
  }
  
  /*我的代码↓↓↓ */
  const{name}=person;
  const{age}=person;
  const{address:{city}}=person;
  const{address:{area}}=person;
  const{title:[title1,titleA]}=person;  
/* 不是很清楚这个{year:2021, title:'GoodStudent'}怎么再解构了，
就把括号里当成一个整体再取的，不知道是不是这个意思*/


  console.log(name) // 露露姐姐
  console.log(age) // 1000000
  console.log(city) // ChongQing
  console.log(area) // NanShan
  console.log(title1) // student
  console.log(titleA.title)// GoodStudent
 // console.log(title3) // God  /*god在哪里，要自己加吗（泪）*/