
// filter

/*const strArr = ["Alice" , "Bob" ,"Charline","Diana","Ethan","Fiona"]

const returned = strArr.filter((elem)=>{
  return elem.length >= 6

})
console.log(returned)*/

//includes

/*const arr = [33, 4, 67, 40, 30,20]

let answer = arr.includes(30)

console.log(answer)*/

/*const data = [
  [
    ["apple" , 10],
    ["Banana" , 20],
    ["Mango", 30]
  ],
  [
    ["Orange", 15],
    ["Grapes", 25]
  ],
  [
    ["watermelon" , 50],
    ["papaya" , 35],
    ["Guava",40]
  ]
]

for(let group of data){
  for(let data of group ){
    console.log(data[0] + " -> " + data[1]);
  }
  console.log("");
}*/

/*fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => console.log(data));*/

setTime(() =>{
  console.log('set')
  for(let i = 0;  i <10000; i++){
    console.log('print', i)
  }
}, 5000)

setInterval(() =>{
  console.log('set Interval')
}, 1000)