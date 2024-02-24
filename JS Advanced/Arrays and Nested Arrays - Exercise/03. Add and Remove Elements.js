    function solve(input){
        let start = 0;
        let result = [];

        input.forEach(el => {
            if (el == 'add'){
                result.push(++start);
            } else{
                result.pop();
                start++;
            }
        });

        result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
    }