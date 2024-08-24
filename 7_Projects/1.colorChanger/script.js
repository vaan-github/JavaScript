const buttons = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body')
// console.log(body);

buttons.forEach((eachButton)=>{
    console.log(eachButton)
    eachButton.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        document.body.style.backgroundColor = e.target.id

    })

})