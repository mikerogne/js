// Turrible...
var averageTempDay1 = [72, 75, 79, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 75, 73, 72];

// Better. Each row will represent a day, each column represents hourly measurement of temperature.
var averageTemp = [];
averageTemp[0]  = [72, 75, 79, 79, 81, 81];
averageTemp[1]  = [81, 79, 75, 75, 73, 72];

/*
 Visual representation:
 ....[0] [1] [2] [3] [4] [5]
 [0] 72  75  79  79  81  81
 [1] 81  79  75  75  73  72
 */

printMatrix(averageTemp);

function printMatrix(myMatrix) {
    var i, j;

    for(i = 0; i < myMatrix.length; i++) {
        for(j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}
