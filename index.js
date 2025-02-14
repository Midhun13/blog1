
const toggleButton = document.getElementById('toggleButton');
const contactUs = document.getElementById('contactUs');

toggleButton.addEventListener('click', function() {
    if (contactUs.style.display === 'none') {
        contactUs.style.display = 'block'; 
        toggleButton.textContent = 'Hide Contact Us'; 
    } else {
        contactUs.style.display = 'none';
        toggleButton.textContent = 'Show Contact Us'; 
    }
});
