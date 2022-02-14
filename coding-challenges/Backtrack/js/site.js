function getString() {
    var targetString = document.getElementById("targetString").value;
    return targetString;
}

function reverseString() {
    var targetString = getString();
    var targetStringReverse = ""

    for(let i = targetString.length - 1; i >= 0; i--) {
        targetStringReverse += targetString[i];
    };

    return targetStringReverse;
}

function printReverseString() {
    var printHeader = document.getElementById("results");
    
    printHeader.innerHTML = reverseString();
}