
const button = document.getElementById('my-button');


const heading = document.querySelector('h1');


button.addEventListener('click', () => {

    heading.textContent = 'You clicked the button!';
    heading.style.color = '#7409d8ff';
});
    