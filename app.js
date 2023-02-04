const submit = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const pattern = /^[A-Za-z0-9._+-]+[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;

submit.addEventListener("click", () => {
    
    inputs.forEach(input => {
        if(input.value === "" || (input.name === "email" && !pattern.test(input.value))){
            input.style.border = "2px solid hsl(0, 100%, 74%)";
            input.style.color = "hsl(0, 100%, 74%)";
            input.placeholder = "";
            input.nextElementSibling.style.display = "block";
            input.nextElementSibling.nextElementSibling.style.display = "block";
        }
        else {
            input.style.color = "hsl(249, 10%, 26%)";
            input.style.border = "1px solid hsl(246, 25%, 77%)";
            input.nextElementSibling.style.display = "none";
            input.nextElementSibling.nextElementSibling.style.display = "none";
        }
    });
});

inputs.forEach(input => {
    input.addEventListener("click", () => {
        input.style.color = "hsl(249, 10%, 26%)";
    });
});