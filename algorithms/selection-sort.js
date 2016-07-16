var list = [3, 5, 1, 4, 2];

console.log('Original', list);

selectionSort(list);
console.log('Sorted', list);


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = findIndexOfSmallest(array, i);
        swap(array, i, min);
    }
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function findIndexOfSmallest(array, startingIndex) {
    var minValue = array[startingIndex];
    var minIndex = startingIndex;

    for (let i = startingIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}
