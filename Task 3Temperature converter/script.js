function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitInput").value;
  const resultField = document.getElementById("result");

  if (isNaN(input)) {
    resultField.value = "Invalid input!";
    return;
  }

  let result = "";

  switch (unit) {
    case "celsius":
      const toF = (input * 9/5) + 32;
      const toK = input + 273.15;
      result = `${toF.toFixed(4)} °F | ${toK.toFixed(4)} K`;
      break;

    case "fahrenheit":
      const toC = (input - 32) * 5/9;
      const toKf = toC + 273.15;
      result = `${toC.toFixed(4)} °C | ${toKf.toFixed(4)} K`;
      break;

    case "kelvin":
      const toCk = input - 273.15;
      const toFk = (toCk * 9/5) + 32;
      result = `${toCk.toFixed(4)} °C | ${toFk.toFixed(4)} °F`;
      break;
  }

  resultField.value = result;
}
