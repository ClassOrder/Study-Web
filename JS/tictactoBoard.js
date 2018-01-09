"use strict";

let rows = [];

for(let rowCount = 0; rowCount < 3; rowCount++) {
    rows[rowCount] = [];
    for(let colCount = 0; colCount < 3; colCount++) {
        rows[rowCount][colCount] = '.';
    }
}

rows[0][2] = 'X';

rows.forEach(function (row) {
    console.log(row.join(' '));
});
