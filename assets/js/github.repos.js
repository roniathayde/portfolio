function createTemplateProject({name, html_url, languages_url, stargazers_count, watchers,description}){

    let card = `
    <a target="_blank" class="projects_list_link" href="${html_url}">
        <article class="projects_list_project">

            <header class="projects_list_project_head">
                <i class="fa-regular fa-folder"></i>
                <h3 class="projects_list_project_head--title">${name}</h3>
            </header>

            <p class="projects_list_project--desc">${ description ? description : "Visualize o projeto aqui"}
            </p>

            <footer class="projects_list_project--foot">
                <div class="projects_list_project--foot--star">
                    <i class="fa-regular fa-star"></i> 
                    ${stargazers_count}
                </div> 
                
                <div class="projects_list_project--foot--watch">
                    <i class="fa-regular fa-eye"></i>
                    ${watchers}
                </div> 
                
            </footer>

        </article>
    </a>
    `
   
    return card;
}

export  const createConectionGitHub = async function(){
    
    try{
        const response = await fetch('https://api.github.com/users/roniathayde/repos')
    

        if (  response.ok || response.status < 400){
            
            const data = await response.json()

            
            data.forEach( project =>{
                
                document.querySelector('.projects_list').innerHTML += ( createTemplateProject( project ) )
    
            })
        }  else{
            throw Error('Não foi possível fazer conexão com API. Entre em contato com administrador do site')
        }
    }catch(e){
        document.querySelector('.projects_list').textContent = e.message
        
    }
    
    document.querySelector('.projects--btn').addEventListener('click', function(){// toggle display block/none projects

        if (document.querySelector('.projects_list').dataset.displayProjects == 'hidden'){

            document.querySelectorAll('.projects_list .projects_list_link:nth-child(n+5):nth-child(-n+200)').forEach( e =>{
                e.style.display = "block" 

                document.querySelector('.projects_list').setAttribute('data-display-projects', 'visible')
            })

        }else if (document.querySelector('.projects_list').dataset.displayProjects == 'visible'){


            document.querySelectorAll('.projects_list .projects_list_link:nth-child(n+5):nth-child(-n+200)').forEach( e =>{
                e.style.display = "none" 

                document.querySelector('.projects_list').setAttribute('data-display-projects','hidden')
                
            })
        } 
    })
}


// console.log(typeof document.querySelector('.projects_list').dataset.displayProjects)