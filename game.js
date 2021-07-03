var hole = document.getElementById('hole');
var charecter = document.getElementById('charecter');
var block = document.getElementById('block');
var jumping = 0;
var start=true;
var d = document.getElementById('textinstr');
d.addEventListener("click", function () {
    start = true;
    if (start == true) {
        var counter = 0;
        hole.addEventListener('animationiteration', () => {
            var random = ((Math.random() * 300) + 150);
            hole.style.top = -random + "px";
            document.getElementById('score').innerHTML = `${counter}`;
            counter++;
        });
        // let d=parseInt(window.getComputedStyle())
        var init = 150;
        //This will changes the position of hole we defined which will change the block 
        function defaultfall() {
            if (jumping == 0) {
                init = init + 3;
                charecter.style.top = `${init}px`;
            }
            var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
            var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
            //Difference is there when we declare style.left and getComputedStyle 
            var passornot = -(500 - init);
            if (init > 480 || (blockleft < 20) && (blockleft > -50) && ((passornot < holetop) || (passornot > holetop + 130))) {
                init = 150;
                start = false;
                alert(`Game over and you got these no of points :${counter}`);
                counter = 0;
            }
        }
        setInterval(defaultfall, 20);
        //To call fall down by default 
        function jump() {
            jumping = 1;
            no_of_jumps = 0;
            var jumpinterval = setInterval(() => {
                if (init > 6 && no_of_jumps < 15) {
                    init = init - 5;
                    charecter.style.top = `${init}px`;
                }
                if (no_of_jumps > 20) {
                    clearInterval(jumpinterval);
                    jumping = 0;
                    no_of_jumps = 0;
                }
                no_of_jumps++;
            }, 10);
        }
        document.addEventListener("keydown", moveup);
        function moveup(event) {
            if (event.keyCode == 38) {
                jump();
            }
            else {
                defaultfall();
            }
        }
    }
    //It waits for the key arrow down downward arrow to press and then implements the jump function which jumps the flappy bird on certain conditions that no of jumps <=20 and then owing to them it jumps.
    
});


