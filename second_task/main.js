let popOfmessage = +prompt();
function checkNumber() {
    if (popOfmessage == 0) {
        return 'Число 0.';
    }
    else if (popOfmessage % 2 === 0) {
        return 'Число парне.';
    }
    else if (popOfmessage % 2 !== 0) {
        return 'Число непарне.';
    }
}
console.log(checkNumber());
