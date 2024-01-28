function solution(initialNumber) {
    function addNumber(number) {
        return initialNumber + number;
    }

    return addNumber;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
