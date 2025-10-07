let calculation = JSON.parse(localStorage.getItem("calculation")) || "";
document.querySelector(".js-output").innerHTML = calculation;

// You can add more functionality here if needed
function updateCalculator(input) {
  if (calculation === undefined || input === null || input === undefined) {
    calculation = "";
  }

  if (input === "=") {
    calculation = eval(calculation);
    document.querySelector(".js-output").innerHTML = calculation;
    localStorage.setItem("calculation", JSON.stringify(calculation));
    return;
  }

  if (input === "Clear") {
    localStorage.removeItem("calculation");
    calculation = "";
    document.querySelector(".js-output").innerHTML = "Cleared";
    return;
  }

  calculation += input;
  localStorage.setItem("calculation", JSON.stringify(calculation));
  document.querySelector(".js-output").innerHTML = calculation;
  // console.log(calculation);
}
