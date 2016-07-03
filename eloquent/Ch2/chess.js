/*
 Write a program that creates a string that represents an 8x8 grid, using newline
 characters to separate lines. At each position of the grid there is either a space
 or a "#" character. The characters should form a chess board.

 Passing this string to console.log should show something like this:

 _#_#_#_#
 #_#_#_#
 _#_#_#_#
 #_#_#_#
 _#_#_#_#
 #_#_#_#
 _#_#_#_#
 #_#_#_#

 */

var boardSize = 8;
var string    = '';

for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
        if (i % 2 == 0) {
            string += j % 2 == 0 ? '#' : ' ';
        } else {
            string += j % 2 == 0 ? ' ' : '#';
        }
    }

    string += "\n";
}

console.log(string);

// Book Solution:
var size  = 8;
var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
