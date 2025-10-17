document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = "Button clicked! The JS is working!";
        button.style.backgroundColor = 'lightgreen';
    });
});
