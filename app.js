let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let x = "";

buttons.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        let k = e.target.innerText;
        if (k === '=') {
            try {
                x = eval(x);
            } catch (error) {
                x = "Error";
            }
            input.value = x;
        } else if (k === 'DE') {
            x = x.slice(0, -1);
            input.value = x;
        } else if (k === 'AC') {
            x = "";
            input.value = x;
        } else {
            x += k;
            input.value = x;
        }
    });
});