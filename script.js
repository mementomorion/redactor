document.getElementById('applyText').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const fontSelect = document.getElementById('fontSelect').value;
    const textOverlay = document.getElementById('textOverlay');
    const textOverlaySecond = document.getElementById('textOverlaySecond');

    textOverlay.style.fontFamily = fontSelect;
    textOverlay.textContent = textInput;

    textOverlaySecond.style.fontFamily = fontSelect;
    textOverlaySecond.textContent = textInput;
});
