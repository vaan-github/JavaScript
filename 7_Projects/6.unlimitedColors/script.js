
const randomColor = () =>{
    const hex = "0123456789ABCDEF" // HEX-VALUE HAS 16-BITS 
    let color = "#"
    for (let i = 0; i < 6; i++) {
         color += hex[Math.floor((Math.random())*16)];
    }
    console.log(color)
    return color
}
// console.log(randomColor())

let infiniteColor  // use by clearInterval
const startColorChange = () =>{
    // infiniteColor = "#34ABER";
    if (!infiniteColor){ // run if value is true
    const changeBgColor = () => {
            document.body.style.backgroundColor = randomColor()
         }
    infiniteColor = setInterval(changeBgColor,1000)
        }else console.log ("infiniteColor is not null")

}

const stopColorChange = () =>{
    clearInterval(infiniteColor)
    infiniteColor = null;

}

document.querySelector('#start').addEventListener('click', startColorChange,false)
document.querySelector('#stop').addEventListener('click', stopColorChange,false)
// setInterval(randomColor,1000)