const PHONE_NUMBER = "+91980503540"; // Your number

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Particle Effects (Stars & Hearts)
function createParticles() {
    const starsContainer = document.getElementById('stars-container');
    const heartContainer = document.getElementById('heart-container');

    // Create sparse stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }

    // Interval for rising hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const hearts = ['❤️', '💖', '✨', '🌸', '🌹'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 400);
}

createParticles();

// Interactive No Button logic (Advanced)
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

const moveNoButton = () => {
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = "999";
};

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Success Logic with WhatsApp notification
yesBtn.addEventListener('click', () => {
    document.getElementById('success-modal').classList.remove('hidden');

    // Confetti effect
    createConfetti();

    // Notification message
    const message = encodeURIComponent("Hii, I saw your website... and YES! I forgive you. Let's be together forever! ❤️💍");
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

    // Redirect after 3 seconds
    setTimeout(() => {
        window.location.href = whatsappUrl;
    }, 3500);
});

function createConfetti() {
    const colors = ['#ff4b6e', '#d4af37', '#ffffff', '#ff85a1'];
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = ['❤️', '✨', '💖'][Math.floor(Math.random() * 3)];
            particle.style.position = 'fixed';
            particle.style.left = '50vw';
            particle.style.top = '50vh';
            particle.style.fontSize = Math.random() * 20 + 10 + 'px';
            particle.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            particle.style.zIndex = '2000';

            document.body.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 500 + 200;
            const destX = Math.cos(angle) * velocity;
            const destY = Math.sin(angle) * velocity;

            requestAnimationFrame(() => {
                particle.style.transform = `translate(${destX}px, ${destY}px) rotate(${Math.random() * 360}deg)`;
                particle.style.opacity = '0';
            });

            setTimeout(() => particle.remove(), 1500);
        }, i * 15);
    }
}
