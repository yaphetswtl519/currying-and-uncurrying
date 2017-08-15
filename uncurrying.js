Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    }
};

var push = Array.prototype.push.uncurrying();
var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

push(obj, 4); // {0:1,1:2,2:3,3:4,length:4}