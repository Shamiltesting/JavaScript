function pow(x, y) {
    for (i = 0; i < y; x * x);
    if (x === 0) {
        console.log(0);
    } else if (x === 1) {
        console.log(1);
    } else {
        console.log(x);
    }
}
pow(2, 3)