let arr = [-3,5,1,3,2,10];
let y = [];
// let first = 0;
// let last =  x.length - 1;
// while (first < last){
//      b = x[first];
//     x[first] = x[last];
//     x[last] = b;
//     first ++;
//     last --;
//}
let temp = 0;
for (let i = 0; i < arr.length ; i++) {
    if(temp>arr[0]){
     temp = arr[0];
     arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    }
}
console.log(arr);


