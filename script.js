// Get the "Yes" and "No" button elements
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Set a distance threshold where the button will start moving (in pixels)
const threshold = 150;

// Set a debounce timer to limit how often the button moves (in ms)
let moveTimeout;

// Variable to track the "No" button clicks
let noButtonClicks = 0;

// Function to calculate the distance between mouse cursor and button
function getDistance(x, y, button) {
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    return Math.sqrt(Math.pow(x - buttonCenterX, 2) + Math.pow(y - buttonCenterY, 2));
}

// Function to move the "No" button to a random position within the screen bounds
function moveButtonRandomly() {
    // Get the current dimensions of the window and button
    const maxX = window.innerWidth - noButton.offsetWidth - 10; // Subtract 10px margin for the right side
    const maxY = window.innerHeight - noButton.offsetHeight - 10; // Subtract 10px margin for the bottom side

    // Generate random X and Y coordinates, making sure it stays within screen bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the random position using absolute positioning
    noButton.style.position = 'absolute'; // Set position to absolute so it can be moved freely
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Mousemove event to track the cursor
document.addEventListener('mousemove', (event) => {
    const distance = getDistance(event.clientX, event.clientY, noButton);

    // If the mouse is within the threshold, move the "No" button randomly
    if (distance < threshold) {
        // If there's a pending move, cancel it (debouncing)
        clearTimeout(moveTimeout);

        // Trigger a move after a short delay to avoid glitches
        moveTimeout = setTimeout(() => {
            moveButtonRandomly();
        }, 50); // Move the button every 50ms, but only once per move attempt
    }
});

// Add an event listener for the "Yes" button (e.g., navigate to a new page or trigger an action)
yesButton.addEventListener('click', () => {
    window.location.href = 'yes.html';  // Redirect to another page
});

// Add an event listener for the "No" button to show pop-ups and redirect
noButton.addEventListener('click', () => {
    noButtonClicks++;

    // Show different messages based on how many times the "No" button was clicked
    if (noButtonClicks === 1) {
        alert('INGAT DAPAT TU BLUEK TRY AGAIN! 😎');
    } else if (noButtonClicks === 2) {
        alert('ERKK.....TRY AGAIN BLUEEKK! 🐱');
    } else if (noButtonClicks === 3) {
        alert('AYANG TEKANLAH YESSSS 😅');
        
        // After the third click, redirect to a new page
        window.location.href = 'no.html';  // Change this to the desired page
    }
});








