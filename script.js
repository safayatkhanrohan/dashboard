
const formInput = document.querySelector('.form-control');

formInput.addEventListener('focus', () => {
    formInput.classList.add('custom-focused');
});

formInput.addEventListener('blur', () => {
    formInput.classList.remove('custom-focused') // Correct spelling: 'transparent'
});
