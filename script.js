document.getElementById('applyText').addEventListener('click', function() {
    const textInput = document.getElementById('name').value;
    const fontSelect = document.querySelector('input[name="font"]:checked').value;
    const textOverlay = document.getElementById('textOverlay');
    const textOverlaySecond = document.getElementById('textOverlaySecond');

    textOverlay.style.fontFamily = fontSelect;
    textOverlay.textContent = textInput;
    textOverlaySecond.style.fontFamily = fontSelect;
    textOverlaySecond.textContent = textInput;
});

document.getElementById('applyGlow').addEventListener('click', function() {
    const glowElement = document.getElementById('glow3');
    const textOverlay = document.getElementById('textOverlay');
    const textOverlay2 = document.getElementById('textOverlaySecond');
    if (glowElement.style.display === 'none' || glowElement.style.display === '') {
        // glowElement.style.display = 'block';
        textOverlay.style.textShadow = '0 0 19px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 100px #fff';
        textOverlay2.style.textShadow = '0 0 4px #fff, 0 0 8px #fff, 0 0 16px #fff, 0 0 19px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 100px #fff';
    } else {
        // glowElement.style.display = 'none';
        textOverlay.style.textShadow = 'none';
        textOverlay2.style.textShadow = 'none';
    }
});