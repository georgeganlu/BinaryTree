// bind绑定js的写法。
Function.prototype.bind1 = (_context) => {
    let _self = this;
    return function() {
        console.log(_self);
        _self.call(_context, arguments);
    }
};

Function.prototype.bind2 = () => {
    let _self = this;
    let _context = arguments[0];
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
        _self.apply(_context, )
    }
};


// 上面bind的写法
// let obj = {
//     a: 'adsfasdf',
// }
// let test = function () {
//     console.log(this.a);
// }.bind(obj);
// test();

