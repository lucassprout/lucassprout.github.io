console.log('works');
const next = document.querySelector("#next");
const description = document.querySelector("#description");


function loadButton (next, description) {
    next.addEventListener('click', function() {
        description.classList.toggle('hidden');
    });    
}

loadButton(next, description);

