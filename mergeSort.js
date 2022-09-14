const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArray, rightArray) => {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length ) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++
        }
    }

    if (leftArray[leftIndex]) {
        let unaddedElements = leftArray.slice(leftIndex)
        result.push(...unaddedElements);
    } else {
        let unaddedElements = rightArray.slice(rightIndex)
        result.push(...unaddedElements);
    }

    return result
}

console.log(mergeSort([30, 20, 50, 100, 35, 90, 200, 120, 10]))
console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]))