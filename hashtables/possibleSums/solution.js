function possibleSums(coins, quantity) {
    const sums = new Set();
    sums.add(0);

    for (let i = 0; i < coins.length; i++) {
        const next = new Set();
        for (const value of sums.keys()) {
            for (let j = 1; j <= quantity[i]; j++) {
                next.add(value + j * coins[i]);
            }
        }

        [...next.keys()].forEach((val) => sums.add(val));
    }

    return sums.size - 1;
}
