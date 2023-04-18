function createTemplateProject({author, link, title, published, category}){

    let date = new Date(published);

    let day = date.getDate();
    
    let month = date.getMonth() + 1;

    let year = date.getFullYear();

    let formedDate = `${day.toString().padStart(2, 0)}/${month.toString().padStart(2, 0)}/${year}`;


    let card = `
    <a target="_blank" class="posts_list_link" href="${link}">
        <article class="posts_list_project">

            <header class="posts_list_project_head">
                <i class="fa-regular fa-folder"></i>
                <h3 class="posts_list_project_head--title">${title}</h3>
            </header>

            <p class="posts_list_project--desc">${"Visualize a postagem aqui"}
            </p>

            <footer class="posts_list_project--foot">
                <div class="posts_list_project--foot--star" title="publication date">
                    <i class="fa-solid fa-calendar-days"></i>
                    ${formedDate }
                </div> 
                
                <div class="posts_list_project--foot--watch" title="Tags">
                    <i class="fa-solid fa-tags"></i>
                    <span>${category}</span>
                </div> 
                
            </footer>

        </article>
    </a>
    `
   
    return card;
}

export  const createConectionMedium = async function(){
    document.querySelector('.posts_list').textContent = "Carregando..."
    
    try{
        const response = await fetch('https://v1.nocodeapi.com/roniathayde/medium/XqURtubenXhWAjey')



        if (  response.ok || response.status < 400){
            document.querySelector('.posts_list').textContent = "";
            const data = await response.json()

            
            data.forEach( project =>{
                
                document.querySelector('.posts_list').innerHTML += ( createTemplateProject( project ) )
    
            })
        }  else{
            throw Error('Não foi possível fazer conexão com API. Entre em contato com administrador do site')
        }
    }catch(e){
        document.querySelector('.posts_list').textContent = e.message
        
    }
}
