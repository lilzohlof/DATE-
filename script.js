document.getElementById('yesButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<p>I know it\'s my duty to choose the day and time but regarding your work, I need some help here:</p>';
    document.getElementById('dayOffInput').style.display = 'inline'; // Show the input
    document.getElementById('submitButton').style.display = 'inline'; // Show the submit button
    blowUpHearts();
});

document.getElementById('noButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<p class="sad-text">Oh no! Please reconsider!</p>';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    let newTop, newLeft;

    do {
        newTop = Math.random() * (containerRect.height - noButtonRect.height);
        newLeft = Math.random() * (containerRect.width - noButtonRect.width);
    } while (newTop < 0 || newLeft < 0 || newTop > containerRect.height - noButtonRect.height || newLeft > containerRect.width - noButtonRect.width);

    noButton.style.position = 'absolute';
    noButton.style.top = newTop + 'px';
    noButton.style.left = newLeft + 'px';
});

function blowUpHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '&hearts;';
        heart.classList.add('heart');
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
