function main () {

    // const next = document.querySelector("#next");
    // const description = document.querySelector("#description");
    // const outsourcing = document.querySelector("#outsourcing");
    const toggleMenu = document.querySelector("#togglemenu");
    const btMenu = document.querySelector("#btmenu");


    /**
     * Slider to change articles on service section
     * 
     * @param {variable} next -> button for chance article section service
     * @param {variable} description -> decription service article
     * @param {variable} outsourcing -> outsourcing service article
     */

    // next.addEventListener('click', function(event) {
    //     description.classList.toggle('hidden');
    //     outsourcing.classList.toggle('hidden');
    // });    



    /**
     * Button action to show mobile menu toggle
     * 
     * @param {variable} toggleMenu -> Hidden mobile menu
     * @param {variable} btMenu-> Button for show mobile menu
     */
    btMenu.addEventListener('click', function() {
        toggleMenu.classList.toggle('hidden');
    });  

}


function typeEffect () {

    const typeWriter = function (txtElement, words, wait=2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    //Init on DOM Load
    document.addEventListener('DOMContentLoaded', init);

    //Init App
    function init() {
        const txtElement = document.querySelector('#txtType');
        const words = JSON.parse(txtElement.getAttribute('wordsType'));
        const wait = txtElement.getAttribute('waitType');
        // Init TypeWriter
        new typeWriter(txtElement, words, wait);
    }

    //Type method
    typeWriter.prototype.type = function () {
        // Index of words
        const current = this.wordIndex % this.words.length;
        // Get full words
        const fullTxt = this.words[current];

        // Check if deleting 
        if (this.isDeleting) {
            // remove a char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // add cha
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // insert element into txt
        this.txtElement.innerHTML = `<span class="border-r-2 border-white">${this.txt}</span>`;

        // Initial type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        } 

        // if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause in the end
            typeSpeed  = this.wait;
            //Set delete true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // move to the next word
            this.wordIndex++;
            // pause before start typing
            typeSpeed = 600;
        }


        setTimeout(() => this.type(), typeSpeed)
    }

}


// Call functions
main();
typeEffect();

