function max(...arg) {
    let maxNumber = arg[0];
    for (let i = 0; i < arg.length; i++) {
        if (maxNumber < arg[i]) {
            maxNumber = arg[i];
        }
    }
    return maxNumber;
}
let showMessage = max(5, -2, 30, 6);
console.log(showMessage);
