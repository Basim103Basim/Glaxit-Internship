let inc = document.getElementById("increase");
let dec = document.getElementById("decrease");
let reset = document.getElementById("reset");

function methods() {
    let c = 0;

    return {
        increment() {
            c++;
            document.getElementById("screen").value = c;
        },

        decrement() {
            if (c > 0) {
                c--;
            }
            document.getElementById("screen").value = c;
        },

        reset() {
            c = 0;
            document.getElementById("screen").value = c;
        }
    };
}
let counter=methods()
inc.addEventListener("click", counter.increment);
dec.addEventListener("click", counter.decrement);
reset.addEventListener("click", counter.reset);