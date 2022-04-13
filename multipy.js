const multipy = (num) => {
     for(let i = num -1; i >= 1; i--) {
         num *= i;
     }
     return console.log(num);
}
   

multipy(4);
multipy(8);