Array.prototype.myEach = function(callback) {
    for(i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

const callBackFunc = (ele) => {
    console.log(ele * 9);
};

// console.log([1,2,6].myEach(callBackFunc));

Array.prototype.myMap = function(callback) {
    const arr = [];
    this.myEach(ele => arr.push(callback(ele)));
    return arr;
};

const eachCallbackFunc = (ele) => {
     return (ele * 2);
};

console.log([2, 3, 4].myMap(eachCallbackFunc));
