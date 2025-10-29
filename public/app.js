const search_bar = document.getElementById('searchInput');
const search_btn = document.getElementById('searchBtn');


function search(phrase) {
    let val = search_bar.value;
    fetch(`/api?phrase=${phrase}`)
        .then(response=> {
            if(!response.ok){
                throw new Error("Api req did not Resolve , server error", response.status);
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error=>{
            console.error(error);
        })

}


search_btn.addEventListener('click', ()=>{
    if(search_bar.value != ''){
        search(search_bar.value);
        search_bar.value = ''
    }
    
})
search_bar.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter' && search_bar.value != ''){
        search(search_bar.value);
        search_bar.value = ''
    }
})


