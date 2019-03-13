// let list = [1, 2, 3, 4, 5, 6];
// let num = Math.ceil(Math.random() * 6);
// console.log(num);
let list = [];
for (let i = 0; i < 100; i++) {
    if (i < 50) {
        list.push(6);
    } else if (i>49 && i<65) {
        list.push(5);
    } else if (i>64 && i<75) {
        list.push(4);
    } else if (i>74 && i<85) {
        list.push(3);
    } else if (i>84 && i<95) {
        list.push(2);
    } else if (i>94 && i<100) {
        list.push(1);
    }
}
let list2 = [];
for(let i =0; i<100; i++) {
    let num = Math.floor(Math.random() * 100);
    list2.push(list[num]);
}
// console.log(list2);
let num2 = Math.floor(Math.random() * 100)
console.log(list2[num2]); 

