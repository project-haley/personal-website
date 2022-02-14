function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        return numbers;
    }
}

function generateNumbers(start, end) {
    let numbers = [];

    for (let index = start; index <= end; index++) {
        numbers.push(index);
    }

    return numbers;
}

function generateTable() {
    let numbers = getValues();
    let tableResult = document.getElementById("results")
    let tableString = ""
    let className = "even"

    for (index = numbers[0]; index <= numbers[numbers.length - 1]; index++) {
        if (index % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        tableString += `<tr><td class="${className}">${index}</td></tr>`;

    }

    tableResult.innerHTML = tableString;
}