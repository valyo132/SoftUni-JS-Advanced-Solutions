function magicMtrx(mtrx) {

    let [row, col, count] = [0, 0, 0];
    const equalBenchmark = mtrx[0].reduce((a, b) => {
        a += b;
        return a; 
    }, 0)

    for (let step = 0; step < mtrx.length; step++) {
        let rowCheck = 0;
        let colCheck = 0;

        mtrx[step].forEach(el => rowCheck += el);
        rowCheck === equalBenchmark ? row += rowCheck : row = null;
       
        mtrx.forEach(el => colCheck += el[step]);
        colCheck === equalBenchmark ? col += colCheck : col = null;
        
        if (row === col && row != null && col != null) { count++ };
    }

    console.log(count === mtrx.length);
}