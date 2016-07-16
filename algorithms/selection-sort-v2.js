var list = [3, 5, 1, 4, 2];

console.log('Original', list);

selectionSort(list);
console.log('Sorted', list);

function selectionSort(array) {
    var i, j, minIndex, temp;

    for(i = 0; i < array.length; i++) {
        minIndex = i;

        for(j = i+1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}
