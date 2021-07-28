function matrixElementsSum(matrix) {
    let elementsSum = 0;
    let hauntedRooms = [];

    for (const [i, floor] of matrix.entries()) {
        hauntedRooms[i] = [];

        for (const [j, roomPrice] of floor.entries()) {
            if (!roomPrice) hauntedRooms[i][j] = true;
            else if (hauntedRooms[i - 1]?.[j]) hauntedRooms[i][j] = true;
            else {
                elementsSum += roomPrice;
            }
        }
    }

    return elementsSum;
}
