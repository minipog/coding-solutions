function sortByHeight(a) {
    const A_TREE = -1;
    const ascendingHeights = a
        .filter((v) => v !== A_TREE)
        .sort((a, b) => a - b);

    for (const [i, v] of a.entries())
        if (v === A_TREE) ascendingHeights.splice(i, 0, A_TREE);

    return ascendingHeights;
}
