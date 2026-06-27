function isOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

function checkNumbersOneToTen() {
    for (let number = 1; number <= 10; number++) {
        isOddOrEven(number);
    }
}

checkNumbersOneToTen();

