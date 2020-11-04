let cur = 1;
let pre = 0;
let sto = 0;
let total = 0;
let num;
let i
let res = 0
const fib = [];
const even = [];
let ans1;
let ans2;
//to get sum of multiples of 3 and 5 below 1000
for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        res += i
    }
}
ans1 = document.querySelector('#ans1');
ans1.innerHTML = res;

//to get the sum of even numbers in fibonnaci sequence less than 4million
 while (cur < 4000000) {
    fib.push(cur);
    sto = cur;
    cur += pre;
    pre = sto;
}
for (num of fib) {
    if (num % 2 == 0) {
        even.push(num);
    }
}
for (num of even) {
    total += num
}
ans2 = document.querySelector('#ans2');
ans2.innerHTML = total;