// Правильный выбор элемента видео
const video = document.querySelector('.video-background');

// Инициализация Swiper
const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});

// Обработчик смены слайда
swiperText.on('slideChange', function() {
    let swiper = this;
    // Анимация изменения времени воспроизведения видео
    gsap.to(video, {
        duration: 1.6,
        currentTime: (video.duration / swiper.slides.length - 1) * swiper.realIndex,
        ease: Power2.easeOut
    });
});

swiperText.on('slideChangeTransitionStart', function() {
    video.classList.add(change)
}).on('slideChangeTransitionEnd', function() {
    video.classList.remove('change')
});