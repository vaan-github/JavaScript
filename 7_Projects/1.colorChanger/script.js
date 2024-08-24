const buttons = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body')
// console.log(body);

buttons.forEach((eachButton)=>{
    console.log(eachButton)
    eachButton.addEventListener('click', function(e){
        // console.log(e) // e is a pointerEvent
        // console.log(e.target)
        document.body.style.backgroundColor = e.target.id // This code is my thinking.

    })

})