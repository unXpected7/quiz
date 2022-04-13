const reverse = (str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const a = reverse("hello");
console.log(a);

const b = reverse("abcde");
console.log(b);