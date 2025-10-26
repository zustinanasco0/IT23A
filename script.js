
const button = document.getElementById('my-button');


const heading = document.querySelector('h1');


button.addEventListener('click', () => {

    heading.textContent = 'You clicked the button!';
    heading.style.color = '#7409d8ff';


     const button = document.getElementById('my-button');
        const audio = document.getElementById('background-music');

        
        button.addEventListener('click', () => {
           
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
                alert('Unable to play music. Please check your audio file or browser settings.');
            });
        });
    
});
    