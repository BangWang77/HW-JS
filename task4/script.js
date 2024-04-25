let link = document.querySelector('a');

link.addEventListener('click', (event) => {
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
    console.log('Текст в блоке с id userTextField изменён на', userText);
});

event.preventDefault();
