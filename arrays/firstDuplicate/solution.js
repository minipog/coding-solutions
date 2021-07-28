function firstDuplicate(a) {
    const duplicateMap = {};

    for (const [i, num] of a.entries()) {
        if (duplicateMap.hasOwnProperty(num))
            duplicateMap[num] = [...duplicateMap[num], i];
        else {
            duplicateMap[num] = [i];
        }
    }

    const duplicateArray = Object.entries(duplicateMap).filter(
        ([_, val]) => val.length > 1
    );

    if (!duplicateArray.length) return -1;

    return +duplicateArray.sort((a, b) => a[1][1] - b[1][1])[0][0];
}
