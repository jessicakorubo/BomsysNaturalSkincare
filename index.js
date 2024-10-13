var menu = document.querySelector('.menu-links');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',()=> {
    menu.classList.toggle('active');
})



// Function to display the popup after 5 seconds
// window.onload = function() {
    
    
   
// };

// Function to close the popup
function closePopup() {
    document.getElementById('advertPopup').style.display = 'none';
}