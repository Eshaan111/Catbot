const search_bar = document.getElementById('searchInput');
const search_btn = document.getElementById('searchBtn');
const results = document.getElementById('results');
const controls = document.getElementById('controls');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const downloadBtn = document.getElementById('downloadBtn');
const counter = document.getElementById('counter');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');
let count;
let curr_phrase;
let url_array = [];
let search_limit = 0;

fetch('/api/config')
    .then(result => { return result.json(); })
    .then(data => {
        console.log('Config Recieved from /api/config')
        console.log(data);
        search_limit = data['search_limit']
    })




function search(phrase) {
    curr_phrase = phrase;
    url_array = [];
    count = 1;
    counter.innerHTML = `${count} / ${search_limit}`
    fetch(`/api/search?phrase=${phrase}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Api req did not Resolve , server error", response.status);
            }
            return response.json();
        })
        .then(data => {
            count = 0;
            console.log(data);
            console.log(data['results'][0]['media_formats']['gif']['url']);
            let url = (data['results'][0]['media_formats']['gif']['url']);
            for (i = 0; i < 49; i++) {
                url_array[(url_array).length] = (data['results'][i]['media_formats']['gif']['url']);
            }
            results.innerHTML = '';
            results.innerHTML = `<img src="${url_array[count]}" alt="Cat GIF">`;
            controls.classList.remove('hidden');
            controls.classList.add('shown');


        })
        .catch(error => {
            console.error(error);
        })

}

function nextScroll() {
    if (count + 1 == search_limit) {
        return
    }
    count++;
    counter.innerHTML = `${count + 1} / ${search_limit}`
    results.innerHTML = '';
    results.innerHTML = `<img src="${url_array[count]}" alt="Cat GIF">`;

}

function prevScroll() {
    if (count + 1 == 2) {
        return
    }
    count--;
    counter.innerHTML = `${count} / ${search_limit}`
    results.innerHTML = '';
    results.innerHTML = `<img src="${url_array[count]}" alt="Cat GIF">`;

}

async function download(phrase) {
    curr_url = url_array[count];
    const img_response = await fetch(curr_url);
    const blob = await img_response.blob();

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = phrase;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
}

search_btn.addEventListener('click', () => {
    if (search_bar.value != '') {
        search(search_bar.value);
        search_bar.value = ''
    }

})

prevBtn.addEventListener('click', () => {
    prevScroll();
})

nextBtn.addEventListener('click', () => {
    nextScroll();

})

downloadBtn.addEventListener('click', () => {
    download(curr_phrase);

})

search_bar.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' && search_bar.value != '') {
        search(search_bar.value);
        search_bar.value = ''
    }
})


