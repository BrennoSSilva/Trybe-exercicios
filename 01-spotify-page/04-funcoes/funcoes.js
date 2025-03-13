function biggestSmallerNumber(array) {
    let bigger = array[0];
    let smaller = array[0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > bigger){
            bigger = array[index];
        } else if (array[index] < smaller) {
            smaller = array[index]
        }
    }

    return `Menor: ${smaller} maior: ${bigger}`
};

console.log(biggestSmallerNumber([1,2,3,4,5,6,7,8,8,9,]));
