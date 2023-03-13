const mixedArray = [3,13,74,14,66,15,22,4];

const filterArray = function (mixedArray) { 
    const isEven = [];

    for (var i = 0; i<mixedArray.length; i++) {
        if (mixedArray[i] % 2 == 0) {
            isEven.push(mixedArray[i])
        }
    }
    return isEven
 };

console.log(filterArray(mixedArray));