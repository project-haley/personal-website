function getValues() {
    let firstValue = document.getElementById("firstValue").value;
    let secondValue = document.getElementById("secondValue").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) {
        let numbers = [firstValue, secondValue];
        return numbers;
    }

    // check for zeros, negatives
}

function generateTable() {
    let multiples = getValues();
    let tableResult = document.getElementById("results")
    let tableString = ""
    let className = "noMultiple"
    let beepBoopString = "beep"

    for (index = 1; index <= 100; index++) {
        if (index % multiples[0] == 0 && index % multiples[1] != 0) {
            className = "firstMultiple";
            beepBoopString = "beep";
        } else if (index % multiples[1] == 0 && index % multiples[0] != 0) {
            className = "secondMultiple";
            beepBoopString = "boop";
        } else if (index % multiples[1] == 0 && index % multiples[0] == 0) {
            className = "bothMultiple";
            beepBoopString = "beepboop";
        } else {
            className = "noMultiple";
            beepBoopString = `${index}`;
        }
        tableString += `<tr><td class="${className}">${beepBoopString}</td></tr>`;

    }

    tableResult.innerHTML = tableString;
}