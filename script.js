
const calculateSaving = () => {
    var age = document.getElementById("age").value;
    var netSalary = document.getElementById("netSalary").value;
    var retirementAge = document.getElementById("retirementAge").value
    var incrementPercentage = document.getElementById("percentage").value
    var percentage = incrementPercentage / 100
    var totalYears = retirementAge - age
    if (!(retirementAge <= age)) {
        var annualSalary = netSalary * 12;

        totalSalary = annualSalary;
    }
    else {
        alert("please provide corret information")
    }

    for (var i = 1; i < totalYears; i++) {
        annualSalary = annualSalary + (percentage * annualSalary)
        console.log("loop ananual salary", annualSalary);
        totalSalary += annualSalary
        console.log("loop total salary", totalSalary);

    }
    document.getElementById('result').innerHTML = Math.floor(totalSalary)
}


let currentInput = 1;

console.log("current inputer", currentInput);
function showNextInput() {

    let input = document.getElementById(`input${currentInput}`);
    input.style.display = "none";
    console.log("current before", currentInput);
    let button = document.getElementById("previous")

    button.style.display = "inline-block"

    currentInput++;
    if (currentInput <= 5) {
        console.log("current after", currentInput);
        let nextInput = document.getElementById(`input${currentInput}`);
        nextInput.style.display = "block";
        if (currentInput == 5) {
            let btn = document.getElementById("next")
            btn.style.display = "none"
            calculateSaving()
        }
    }


}

function showPreviousInput() {

    let input = document.getElementById(`input${currentInput}`);
    input.style.display = "none";
    console.log("current before", currentInput);
    let btn = document.getElementById("next")
    btn.style.display = "inline-block"
    currentInput--;

    console.log("current after", currentInput);
    let nextInput = document.getElementById(`input${currentInput}`);
    nextInput.style.display = "block";
    if (currentInput <= 1) {
        let button = document.getElementById("previous")

        // button.setAttribute("disabled", "")
        button.style.display = "none"
    }
}