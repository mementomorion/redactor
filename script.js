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