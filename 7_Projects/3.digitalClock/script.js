const clock = document.getElementById('clock')
// console.log(document.querySelector('#clock')) //same


setInterval(()=>{
    const date = new Date
    // clock.innerText = date.toLocaleTimeString() // time 
    clock.innerText = date.toDateString() // date

},1000)