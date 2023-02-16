

export  const createConectionGitHub = async function(){
    
    const response = await fetch('https://api.github.com/users/roniathayde/repos')
    const data = await response.json()

    console.log(data)

}