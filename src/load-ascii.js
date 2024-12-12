function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadAsciiArt() {
    try {
        const response = await fetch('assets/banner.txt');
        const text = await response.text();

        const asciiContainer = document.getElementById('ascii-art-container');
        asciiContainer.innerHTML = '';
        const progressBar = document.getElementById('progress-bar');
        let width = 0;

        const progressInterval = setInterval(() => {
            if (width >= 100) {
                clearInterval(progressInterval);

                for (let i = 0; i < text.length; i++) {
                    const charElement = document.createElement('div');
                    charElement.classList.add('char');
                    charElement.style.left = (i % 80) * 10 + 'px';
                    charElement.textContent = text[i] === ' ' ? '\u00A0' : text[i];
                    charElement.style.animationDelay = (Math.random() * 2) + 's'; 
                    asciiContainer.appendChild(charElement);
                }
                
                sleep(2000).then(() => {
                    document.getElementById('loader').style.display = 'none';
                    asciiContainer.style.display = 'none';
                    document.getElementById('terminal').style.display = 'block';

                    const asciiArtElement = document.getElementById('ascii-art');
                    asciiArtElement.style.display = 'block';
                    asciiArtElement.innerText = text;

                    document.body.style.overflow = 'auto';
                    document.getElementById('userInput').focus();
                });
            } else {
                width += 1;
                progressBar.style.width = width + '%';
            }
        }, 10);
    } catch (err) {
        console.error('Failed to load ASCII art:', err);
    }
}

window.onload = loadAsciiArt;
