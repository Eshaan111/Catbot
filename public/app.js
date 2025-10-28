const search_bar = document.getElementById('searchInput');
const search_btn = document.getElementById('searchBtn');


function search() {
    let val = search_bar.value;

}


search_btn.addEventListener('click', search)

fetch('/api')
    .then(response => {
        console.log('Status:', response.status);      // Check if it's 200 or 404
        console.log('Response:', response);
        return 'hi';
    })
    .then(data => console.log('Data:', data))
    .catch(error => console.error(error));
