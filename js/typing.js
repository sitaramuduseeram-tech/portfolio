// =======================================
// Hero Typing Animation
// =======================================

// Words to display
const words = [
    "Software Engineer",
    "Java Developer",
    "Problem Solver",
    "Full Stack Developer"
];

// Get the span element
const typingText = document.getElementById("typing-text");

// Check if element exists
if (typingText) {

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            // Typing
            typingText.textContent = currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            // Deleting
            typingText.textContent = currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(type, isDeleting ? 70 : 120);

    }

    // Start animation
    type();

} else {

    console.error("typing-text element not found!");

}