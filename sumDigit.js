
const sumDigit2 = (str) => {
    let a = String(str.replace(/\D/g, ''));
    console.log(a);
    for( i = 0; i < a.length; i++){
        const num = a[i];
        const len = a.length -1 -i;
        const zeroes = new Array(len).fill(0).join("");
        console.log(num + zeroes);
    }
}
let a = "9.86-A5.321";

let q =sumDigit2(a);

