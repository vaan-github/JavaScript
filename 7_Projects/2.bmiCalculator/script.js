const form = document.querySelector('form')

// The following commented useCase will store the blank value which we won't want.
// const height = parseInt(document.querySelector('#height').value) // converted to int
// const weight = parseInt(document.querySelector('#weight').value) // converted to int

form.addEventListener('submit',(e)=>{
     e.preventDefault() // Prevent the form from auto-submit
    //  console.log(typeof( document.querySelector('#height').value )) // string
    const height = parseInt(document.querySelector('#height').value) // converted to int
    const weight = parseInt(document.querySelector('#weight').value) // converted to int
    const results = document.querySelector('#results')// converted to int
    
    if(height == "" || height < 0 || isNaN(height)){
        // results.appendChild(document.createTextNode(`Invalid Height. Output : ${height}`)) // Issue : click calculate  2 times then you will know.
        results.innerHTML = `Invalid Height. Output : ${height}`

    }else if(weight == "" || weight < 0 || isNaN(weight)){
        // results.appendChild(document.createTextNode(`Invalid Weight. Output : ${weight}`))
        results.innerHTML = `Invalid Weight. Output : ${weight}`

    } else {
        const bmi = ((weight/(height * height)) * 10000).toFixed(2)

        // Commented line is the different approach I tried but didnt get the satisfied result.
        // results.appendChild(document.createTextNode("")) // to first clear the previous value.
        // results.appendChild(document.createTextNode(bmi)) // Issue : This line of code also work , but insert the value without deleting the previous.
        
        results.innerHTML =  `<span>${bmi}</span>` // Above Issue is not showing in this line of code.
    }

})