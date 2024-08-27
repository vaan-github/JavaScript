const URL = "https://api.github.com/users/vaan-github"
const myGithub = async()=>{
    try {
        const response = await fetch(URL)
         const data = await response.json() 
         console.log(data.name)
    } catch (error) {
        console.log('Life is unfair: ',error)
    }

}

myGithub()