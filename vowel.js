let myText = document.getElementById("string");
let myButton = document.getElementById("button_");
let myResult = document.getElementById("dom_result");

let vowels = "aeiou"

myButton.addEventListener("click", () => {
    let counter = 0;
    let text = myText.value.toLowerCase();
    for (let index = 0; index < myText.value.length; index++) {
        if (vowels.includes(text[index])) {
            counter++;            
        }
        
    }
    myResult.innerHTML = counter + " vowels in " + myText.value;
    myResult.innerHTML = `there are ${counter} vowels in "${myText.value}"`
})

