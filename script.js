// i've decided to take on the theme flipper first
let theme1 = document.getElementById("button1");
let theme2 = document.getElementById("button2");
let theme3 = document.getElementById("button3");
let calculatorPage = document.getElementById("calculatorPage");
let calculator = document.getElementById("calculator")
let calculatorTexts = document.querySelectorAll(".calcText");
let calculatorHeader = document.getElementById("calculatorHeader");
let themeButtons = document.querySelectorAll(".themeButtons");
let calculatorDisplay = document.getElementById("calculatorDisplay");
let calculatorButtons = document.getElementById("calculatorButtons");
let operands = document.querySelectorAll(".operands");
let deleteBtn = document.querySelector(".deleteBtn");
let additionBtn = document.querySelector(".additionBtn");
let subtractionBtn = document.querySelector(".subtractionBtn");
let decimalPoint = document.querySelector(".decimalPoint");
let divisionBtn = document.querySelector(".divisionBtn");
let multiplicationBtn = document.querySelector(".multiplicationBtn");
let allClear = document.querySelector(".allClear");
let equalityBtn = document.querySelector(".equalsToBtn");
theme1.addEventListener("click",firstTheme);
theme2.addEventListener("click",secondTheme);
theme3.addEventListener("click",thirdTheme);
function firstTheme(){
    calculatorPage.style.background = "rgb(60,73,103)";
    calculator.style.background = "rgb(60,73,103)"
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color = "white";
    });
    calculatorHeader.style.color = "white";
    themeButtons.forEach(themeButton => {
       themeButton.style.background = "rgb(35,44,67)";
    });
    theme1.style.background = "rgb(208,63,47)";
    theme2.style.background = "rgb(35,44,67)";
    theme3.style.background = "rgb(35,44,67)";
    //calculator header style change ends here
    calculatorDisplay.style.background = "rgb(24,32,52)";
    calculatorDisplay.style.color = "white"
    // calculator display style ends here
    calculatorButtons.style.background = "rgb(24,32,52)";
    operands.forEach(operand => {
        operand.style.background = "white"
        operand.style.color = "rgb(68,75,90)";
        operand.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    });
    deleteBtn.style.background = "hsl(225, 21%, 49%)";
    deleteBtn.style.color = "white";
    deleteBtn.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)";
    additionBtn.style.background = "white";
    additionBtn.style.color = "rgb(68,75,90)";
    additionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    subtractionBtn.style.background = "white";
    subtractionBtn.style.color = "rgb(68,75,90)";
    subtractionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    decimalPoint.style.background = "white";
    decimalPoint.style.color = "rgb(68,75,90)";
    decimalPoint.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    divisionBtn.style.background = "white";
    divisionBtn.style.color = "rgb(68,75,90)";
    divisionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    multiplicationBtn.style.background = "white";
    multiplicationBtn.style.color = "rgb(68,75,90)";
    multiplicationBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    allClear.style.background ="hsl(225, 21%, 49%)";
    allClear.style.color = "white"
    allClear.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)";
    equalityBtn.style.background = "hsl(6, 63%, 50%)";
    equalityBtn.style.color = "white";
    equalityBtn.style.boxShadow = "0px 4px 0px hsl(6, 70%, 34%)";
}
function secondTheme(){
    calculatorPage.style.background 
    calculator.style.background 
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color 
    });
    calculatorHeader.style.color
    themeButtons.forEach(themeButton => {
       themeButton.style.background 
    });
    theme1.style.background 
    theme2.style.background 
    theme3.style.background 
    //calculator header style change ends here
    calculatorDisplay.style.background 
    calculatorDisplay.style.color 
    // calculator display style ends here
    calculatorButtons.style.background 
    operands.forEach(operand => {
        operand.style.background
        operand.style.color 
        operand.style.boxShadow 
    });
    deleteBtn.style.background 
    deleteBtn.style.color 
    deleteBtn.style.boxShadow 
    additionBtn.style.background
    additionBtn.style.color
    additionBtn.style.boxShadow
    subtractionBtn.style.background
    subtractionBtn.style.color
    subtractionBtn.style.boxShadow
    decimalPoint.style.background
    decimalPoint.style.color 
    decimalPoint.style.boxShadow
    divisionBtn.style.background 
    divisionBtn.style.color 
    divisionBtn.style.boxShadow 
    multiplicationBtn.style.background
    multiplicationBtn.style.color 
    multiplicationBtn.style.boxShadow
    allClear.style.background 
    allClear.style.color
    allClear.style.boxShadow 
    equalityBtn.style.background
    equalityBtn.style.color
    equalityBtn.style.boxShadow
}
function thirdTheme(){
    calculatorPage.style.background
    calculator.style.background
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color
    });
    calculatorHeader.style.color
    themeButtons.forEach(themeButton => {
       themeButton.style.background
    });
    theme1.style.background 
    theme2.style.background 
    theme3.style.background 
    //calculator header style change ends here
    calculatorDisplay.style.background
    calculatorDisplay.style.color
    // calculator display style ends here
    calculatorButtons.style.background
    operands.forEach(operand => {
        operand.style.background
        operand.style.color
        operand.style.boxShadow
    });
    deleteBtn.style.background 
    deleteBtn.style.color 
    deleteBtn.style.boxShadow
    additionBtn.style.background
    additionBtn.style.color
    additionBtn.style.boxShadow
    subtractionBtn.style.background
    subtractionBtn.style.color
    subtractionBtn.style.boxShadow
    decimalPoint.style.background
    decimalPoint.style.color
    decimalPoint.style.boxShadow 
    divisionBtn.style.background
    divisionBtn.style.color
    divisionBtn.style.boxShadow 
    multiplicationBtn.style.background
    multiplicationBtn.style.color
    multiplicationBtn.style.boxShadow
    allClear.style.background 
    allClear.style.color
    allClear.style.boxShadow
    equalityBtn.style.background
    equalityBtn.style.color
    equalityBtn.style.boxShadow
}
