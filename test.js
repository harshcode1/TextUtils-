// const firstWordCapital = (text) => {
//     let newText = text.split(/[ ]+/);
//     for (let i = 0; i < newText.length; i++) {
//         newText[i] = newText[i].split('');
//         newText[i][0] = newText[i][0].toUpperCase();
//         newText[i] = newText[i].join('');
//     }
//     return newText.join(' ');
// };

// let b = 'harsh soni is great';
// b = firstWordCapital(b);

// console.log(b);


const firstWordCapital = (text) => {
    let newText = text.split(/[ ]+/)
    console.log(newText);
    for (let txt of newText) {
        txt = txt.charAt(0).toUpperCase() + txt.slice(1);
    }
}

firstWordCapital("hello world");

var n = 10
if(true) {
    n = 30;
}
console.log(n);

const countWords = (word) => {
    let m = word.split(" ")
    return m.join('').length
}

console.log(countWords("Harsh Soni is great"))