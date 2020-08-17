const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const API_URL ='http://localhost:5000/mews'

loading.style.display = "none";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDate = new FormData(form);
    const name = formDate.get('name');
    const content = formDate.get('content');

    const mew = {
        name,
        content
    }
    form.style.display = 'none';
    loading.style.display = "";

    fetch(API_URL,
        {
            method: 'POST',
            body: JSON.stringify(mew),
            headers: {
                'content-type': 'application/json'
            }
        }
        )
})