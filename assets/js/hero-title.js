// const words = ['للأفراد', 'للمشروعات'];
// const wordEl = document.getElementById('animatedWord');

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeEffect() {
//     const currentWord = words[wordIndex];

//     if (!isDeleting) {
//         // typing
//         wordEl.textContent = currentWord.substring(0, charIndex + 1);
//         charIndex++;

//         if (charIndex === currentWord.length) {
//             setTimeout(() => isDeleting = true, 700);
//         }
//     } else {
//         // deleting
//         wordEl.textContent = currentWord.substring(0, charIndex - 1);
//         charIndex--;

//         if (charIndex === 0) {
//             isDeleting = false;
//             wordIndex = (wordIndex + 1) % words.length;
//         }
//     }

//     const speed = isDeleting ? 40 : 70;
//     setTimeout(typeEffect, speed);
// }

// typeEffect();







const words = ['للأفراد', 'للمشروعات'];
const wordEl = document.getElementById('animatedWord');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // typing
        wordEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            // wait before starting deletion
            setTimeout(() => isDeleting = true, 700);
        }
    } else {
        // deleting
        wordEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // clear text completely
            wordEl.textContent = '';
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;

            // wait a little before typing next word
            setTimeout(typeEffect, 100); // pause 300ms before next word
            return; // stop this call
        }
    }

    const speed = isDeleting ? 40 : 70;
    setTimeout(typeEffect, speed);
}

typeEffect();
