const images = [
    'https://i.pinimg.com/736x/18/2a/ea/182aea32aebefef989c6c51f449b66bc.jpg',
    'https://static.truist.com/content/dam/truist-bank/us/en/icons/fc-simple-dawn.svg/_jcr_content/renditions/original',
    'https://static.vecteezy.com/system/resources/previews/010/392/791/original/illustration-in-doodle-style-small-ghost-simple-drawing-on-the-theme-of-halloween-a-cute-ghost-isolated-on-white-background-design-for-holiday-for-kids-free-vector.jpg',
];

let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');
const slider = document.querySelector('.slider'); //slider կլասսի արաջին էլեմենտ

slider.addEventListener('click', function(event) {
    if (event.target.id === 'prevButton') {  //images.lenght նկարների քանակն է
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (event.target.id === 'nextButton') { //o2.`curIndx=2, (2-1+3)% 3 = 1 => curIndx = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }  //օր․՝ curIndx=0, (0+1)%3 = 1 => curIndx = 1
    sliderImage.src = images[currentIndex];
});

// Display initial image
sliderImage.src = images[currentIndex];
