let enterNumber = +prompt('enter number')
function getSqrt(): String {
    if (enterNumber < 0) {
        return 'Введіть додатнє число.';
    }
    else if (typeof (enterNumber) === 'number') {
        return `Квадратний корінь з ${enterNumber} = ${Math.sqrt(enterNumber)}`;
    } else {
        return 'Будь ласка, введіть число!';
    }

}

let showMessage = getSqrt()
console.log(showMessage);