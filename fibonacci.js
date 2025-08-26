function fibs(numberOfItems) {
    if (numberOfItems <= 0) return [];
    if (numberOfItems === 1) return [0];
    
    let fib = [0, 1];
    
    for (let i = 2; i < numberOfItems; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib.join(",");
}

function fibsRec(numberOfItems) {
    if (numberOfItems <= 0) return [];
    if (numberOfItems === 1) return [0];
    if (numberOfItems === 2) return [0, 1];
    
    let seq = fibsRec(numberOfItems - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}


