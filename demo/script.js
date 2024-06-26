const images = [
    { src: 'media/Telegram.png', link: 'https://t.me/FestoAdel' },
    { src: 'media/Whatsapp.png', link: 'https://wa.me/message/6C7T4BDAQEWJP1' },
    { src: 'media/eitaa.png', link: 'https://eitaa.com/festo_iran' },
    { src: 'media/bale.png', link: '' }
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const sliderLink = document.getElementById('slider-link');

function changeImage() {
    sliderImage.src = images[currentIndex].src;
    sliderLink.href = images[currentIndex].link;

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2500);


/*-----------------------------------------------------------------
      - Particles
    -------------------------------------------------------------------*/

    

   