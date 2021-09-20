const next = document.querySelector("#next");
const description = document.querySelector("#description");
const outsourcing = document.querySelector("#outsourcing");
const toggleMenu = document.querySelector("#togglemenu");
const btMenu = document.querySelector("#btmenu");


/**
 * Slider to change articles on service section
 * 
 * @param {variable} next -> button for chance article section service
 * @param {variable} description -> decription service article
 * @param {variable} outsourcing -> outsourcing service article
 */
function loadButton (next, description,outsourcing) {
    next.addEventListener('click', function() {
        description.classList.toggle('hidden');
        outsourcing.classList.toggle('hidden');
    });    
}


/**
 * Button action to show mobile menu toggle
 * 
 * @param {variable} toggleMenu -> Hidden mobile menu
 * @param {variable} btMenu-> Button for show mobile menu
 */
function loadToggle (toggleMenu, btMenu) {
    btMenu.addEventListener('click', function() {
        toggleMenu.classList.toggle('hidden');
    });    
}


// Called functions
loadButton(next, description);
loadToggle(toggleMenu, btMenu);

