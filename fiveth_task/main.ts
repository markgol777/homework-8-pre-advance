let elem = selector => document.querySelector(selector);
let badWordsArr = [];

elem('.add-btn').addEventListener('click', (): void => {
    badWordsArr.push(elem('.input-1').value);
    elem('.bad-words').textContent = badWordsArr;
    elem('.input-1').value = ''
})

// let arr = [];
let index = [];
// for (let i = 0; i < elem('.big-input').value.split(' ').length; i++) {
    // theText += elem('.big-input').value.split(' ')[i];
    
// }
// console.log('theText1', theText);

elem('.big-btn').addEventListener('click', (): void => {
    let theText = elem('.big-input').value.split(' ');
    console.log(theText);
    
    for (let i = 0; i < badWordsArr.length; i++) {
        if (elem('.big-input').value.split(' ').includes(badWordsArr[i])) {
            index.push(elem('.big-input').value.split(' ').indexOf(badWordsArr[i]));
            console.log(index);
            theText.replace(/shit/gi, '*');
            // console.log('theText');
            // console.log('theText', theText);
            
            console.log(elem('.big-input').value.split(' ')[index[i]]);
            
        }
    }
})