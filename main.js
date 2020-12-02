console.log('loaded, buddy')

// 1. Grab button, store in variable
const button = document.querySelector('button')

// 2. Grab hidden paragraph, store in variable
const hidden = document.querySelector('.hidden')

// 3. Set up event listener on button
button.addEventListener('click', toggleHidden)

// 4. Declare event listener fuction (thanks, hoisting)
function toggleHidden() {
    hidden.classList.toggle('hidden')
}