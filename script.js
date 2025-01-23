const typingText = document.getElementById('typing-text');
const words = ['Coding', 'Logic', 'Web Development', 'Digital Markiting'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let speed = 50;

function type() {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }
    if (currentCharIndex === currentWord.length && !isDeleting) {
        setTimeout(() => {
            isDeleting = true;
            speed = 50;
            type();
        }, 1500);
    } else if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        speed = 50;
        setTimeout(type, 50);
    } else {
        setTimeout(type, speed);
    }
}
type();


let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000);



    // sign-up system
    
    let btn = document.querySelector(".btn-outline-success");
    btn.addEventListener("click", () => {
        let email = prompt("Enter your email");
        let name = prompt("Enter your Username");
        let pass = prompt("Create a Password");
        alert(`Sign up succesfully your email = ${email} your username = ${name} your password = ${pass}`);
        btn.remove(btn)
    }) 