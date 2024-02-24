function solve(input){
    let result = [];
    result.push(generalDiagonal());
    result.push(secondaryDiagonal());

    console.log(result.join(' '));

    function secondaryDiagonal(){
        let index = 1;
        let sum = 0;
        input.forEach(arr => {
            sum += arr[arr.length - index];
            index++;
        });

        return sum;
    }

    function generalDiagonal(){
        let index = 0;
        let sum = 0;
        input.forEach(arr => {
            sum += arr[index];
            index++;
        });

        return sum;
    }
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );