window.onload = function()
{
    const display = document.getElementById("display");

    const btnOnClick = function(event)
    {
        display.innerText += event.target.textContent;
    }
    const btnOne = document.getElementById("btnOne");
    btnOne.onclick = btnOnClick;
    const btnTwo = document.getElementById("btnTwo");
    btnTwo.onclick = btnOnClick;
    const btnThree = document.getElementById("btnThree");
    btnThree.onclick = btnOnClick;
    const btnFour = document.getElementById("btnFour");
    btnFour.onclick = btnOnClick;
    const btnFive = document.getElementById("btnFive");
    btnFive.onclick = btnOnClick;
    const btnSix = document.getElementById("btnSix");
    btnSix.onclick = btnOnClick;
    const btnSeven = document.getElementById("btnSeven");
    btnSeven.onclick = btnOnClick;
    const btnEight = document.getElementById("btnEight");
    btnEight.onclick = btnOnClick;
    const btnNine = document.getElementById("btnNine");
    btnNine.onclick = btnOnClick;
    const btnZero = document.getElementById("btnZero");
    btnZero.onclick = btnOnClick;
    const btnDot = document.getElementById("btnDot");
    btnDot.onclick = btnOnClick;

    let firstValue;
    let selectedOperator;
    const operationFunction = function(event)
    {
        firstValue = parseFloat(display.innerText.length);
        display.innerText = "";
        selectedOperator = event.target.textContent;
    }

    const btnAsterisk = document.getElementById("btnAsterisk");
    btnAsterisk.onclick = operationFunction;
    const btnPlus = document.getElementById("btnPlus");
    btnPlus.onclick = operationFunction;
    const btnMinus = document.getElementById("btnMinus");
    btnMinus.onclick = operationFunction;
    const btnSlash = document.getElementById("btnSlash");
    btnSlash.onclick = operationFunction;

    let resultValue;
    let secondValue;
    const  calcFunction = function(event)
    {
        const option = {
            baseURL: "http://127.0.0.1:3000/",
            timeout: 5000,
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            } 
        }
        secondValue = parseFloat(display.innerText);
         
        fetch(`http://127.0.0.1:3000/getresult/${firstValue}/${secondValue}/${selectedOperator}`,option)
        .then(res => res.json())
        .then ((response) => {
            console.log (response)
            display.innerText = response.result;
        })
        
        
        
            //display.innerText = resultValue;
    }

    const btnEqual = document.getElementById("btnEqual");
    btnEqual.onclick = calcFunction;


    const btnC = document.getElementById("btnC");
    btnC.onclick = function(event)
    {
        display.innerText = "";
        firstValue = 0;
        secondValue = 0;
        selectedOperator = "";
    }
}