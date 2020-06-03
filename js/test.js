let arr = [1, 5, 10, -2];
let a = [];
let max = arr[0];
let min = arr[0];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

a.push(max);

for (let i = 0; i <arr.length ; i++) {
    if( arr[i] < min){
        min = arr[i]
    }
}
a.push(min);
for (let i = 0; i <arr.length ; i++) {
    sum += arr[i];
}
let TB = sum / (arr.length) ;
console.log(sum)
a.push(TB)
console.log(a);