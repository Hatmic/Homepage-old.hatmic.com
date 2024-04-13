document.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector(".box");
    setTimeout(function() {
        box.classList.add("show");
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".hatmic");
    setTimeout(function() {
        for (var i = letters.length - 1; i >= 0; i--) {
            (function(index) {
                setTimeout(function() {
                    letters[index].classList.remove("show");
                }, (letters.length - index) * 200);
            })(i);
        }
    }, 2000);
});

document.addEventListener('mousemove', function(e) {
    var box = document.getElementById('box');
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var direction = Math.cos(mouseX / window.innerWidth * Math.PI * 2);
    var offsetY = -10 + (10 * direction);
    box.style.transform = 'translate(-50%, -50%) translateY(' + offsetY + 'px)';
});