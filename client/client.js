const form = document.querySelector('form');

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
})