let elem = selector => document.querySelector(selector);
let badWordsArr = [];
elem('.add-btn').addEventListener('click', () => {
    badWordsArr.push(elem('.input-1').value);
    elem('.bad-words').textContent = badWordsArr;
    elem('.input-1').value = '';
});
let index = [];
elem('.big-btn').addEventListener('click', () => {
    let theText = elem('.big-input').value.split(' ');
    console.log(theText);
    for (let i = 0; i < badWordsArr.length; i++) {
        if (elem('.big-input').value.split(' ').includes(badWordsArr[i])) {
            index.push(elem('.big-input').value.split(' ').indexOf(badWordsArr[i]));
            console.log(index);
            theText.replace(/shit/gi, '*');
            console.log(elem('.big-input').value.split(' ')[index[i]]);
        }
    }
});
