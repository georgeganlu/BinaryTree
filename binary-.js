//  64选1的程序。
// 始终平衡的是编码符号和编码长度的问题。

let list = [];
// 形成0-63的地图数。 -- 编码的长度。 先暂定是 log以2为底，64为对数的值，值是取值是6
for(let i = 0; i < 64; i++) {
    list.push(i);
};
// 形成一份十进行转二进制的key的表。 
let maps = [];
list.forEach(item => {
    maps.push(tenToBinary(item));
});

function tenToBinary(item) {
    let str = item.toString(2);  // 转成二进制的string类型。
    while(str.length < 6) {
        str = '0' + str;
    }
    return str; 
}


// 传入test的值是死的好几支，规定 0是吃 1不吃。 --- 0吃就挂了。
function test() {
    let list = Array.prototype.slice.apply(arguments);
    let obj = {};
    list.forEach(id => {        
        let number = id - 1;   // 那一个码位。  --- 编码长度上的那一个码位。
        obj[id] = [];
        maps.forEach((item, index) => {
            if (item.charAt(number) === '0') {
                obj[id].push(index);   // 对应码位上，这只老鼠吃的分别是第几瓶药
            }
        });
    });
    return obj;  
};

let counterpoint = test(1, 2, 4);
// 现在暂定的码位的长度是6。

console.log(counterpoint);