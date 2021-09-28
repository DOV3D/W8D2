Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
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

// console.log([2, 3, 4].myMap(eachCallbackFunc));

Array.prototype.myReduce = function(callback, initialValue) {
    // if (initialValue === undefined) {
    //     initialValue = this[0];
    // }
    initialValue ||= this[0];
    let acc = 0;

    this.myEach(ele => acc += callback(ele));

    return acc;
};

const CallbackFunc = (ele) => {
    return (ele * 2);
};

// console.log([4, 5, 7].myReduce(CallbackFunc));