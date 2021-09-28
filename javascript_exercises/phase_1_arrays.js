
Array.prototype.uniq = function() {
    const arr = [];
    for(i = 0; i < this.length; i++) {
       if (arr.includes(this[i]))  {
        continue;
       }
       else {
           arr.push(this[i])
       }
    }
    // debugger
    return arr;
}

// const variable = [1, 2, 2, 3, 3, 3].uniq();
// console.log(variable);

Array.prototype.twoSum = function() {
    const arr = [];
    for(i = 0; i < this.length-1; i++) {
        for(j = 1; j < this.length; j++) {
            if (this[i] + this[j] === 0){
                arr.push([i,j]);
            }
        }
    }
    // debugger
    return arr;
};

// const test = [1, 2, 3, -1, 4].twoSum();
// // console.log(test);

Array.prototype.transpose = function() {
    const arr = [];
    for(i=0; i < this.length; i++) {
        arr.push([]);
    }
    for (i = 0; i < this.length; i++) {
        for (j = 0; j < this.length; j++) {
            arr[j].push(this[i][j]);
        }
    }
    return arr;
}

// console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());



