function starOutGrid(grid) {
    let rowsWithStarsSet = new Set();
    let colsWithStarsSet = new Set();
    
    for (let i=0; i < grid.length; i++){
        for (let j=0; j < grid[i].length; j++){
            if (grid[i][j] === "*"){
                rowsWithStarsSet.add(i);
                colsWithStarsSet.add(j);
            }
        }
    }

    let rowsWithStars = Array.from(rowsWithStarsSet);
    let colsWithStars = Array.from(colsWithStarsSet);

    rowsWithStars.forEach( row => {
        grid[row].fill("*");
    });

    colsWithStars.forEach( col => {
        for (let i=0; i < grid.length; i++){
            grid[i][col] = "*";
        }
    });

    return grid;
}
