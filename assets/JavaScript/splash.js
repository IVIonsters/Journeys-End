let splash = document.querySelector('.splashpage');
let sloganSpan = document.querySelectorAll('.slogan');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        sloganSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            sloganSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 5000)
            })
        }, 2000);

        setTimeout(() => {
            splash.computedStyleMap.top = '-100vh';
        }, 4000)
    })
})