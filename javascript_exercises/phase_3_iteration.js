Array.prototype.bubbleSort = function () {
    let sorted = false;
    // debugger;
    while (!sorted) { 
        sorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i +1]) {
                let temp = this[i];
                this[i] = this[i +1];
                this[i +1] = temp;
                // this[i], this[j] = this[j], this[i];
                sorted = false;
            }
        }
    }
    return this;
}

// console.log([2,5,4,7,1,6].bubbleSort());

String.prototype.subStrings = function () {
    const arr = [];
    for(let i=0; i < this.length; i++) {
        for(let j=0; j <this.length; j++) {
            let slice = this.slice(i,j+1);
            if (slice === "") {
                continue;
            } else {arr.push(slice);
            }
        }
    }
    return arr;
}

console.log("hello".subStrings());

