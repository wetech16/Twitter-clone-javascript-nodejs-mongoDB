const form = document.querySelector('form');
const loading = document.querySelector('.loading');

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
    console.log(mew);
    form.style.display = 'none';
    loading.style.display = "";
})