function pascal (row) {
    let n = 11;
    for (let index = 0; index <= row-1; index++) {
        console.log(row ** index);
    }
}
pascal(3);