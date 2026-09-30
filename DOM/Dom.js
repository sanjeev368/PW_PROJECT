//console.log(document.getElementsByName('p'))
//console.log(document.getElementById('temp'))
//console.log(document.getElementsByClassName('nj'))

/*const meClassElements = document.querySelector('.me');
let startingNumber =1
meClassElements.forEach((elem)=>{
  elem.textContent = startingNumber;
  startingNumber++;
})

const specialIDElement = document.querySelector('#last');
specialIDElement.textContent = 200*/


const buttonElement = document.querySelector('.Notification');
const inputElemnet = document.querySelector('.Name');

buttonElement.addEventListener('click' , () =>{
  alert('Wake up')
})

inputElemnet.addEventListener('keyup', (e) =>{

  
  console.log(e.key)
  console.log(e.target.value)
  //console.log('key pressed')
})

/*inputElemnet.addEventListener('keyup',() => {
  console.log('up and up only')
})*/

