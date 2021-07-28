function makeArrayConsecutive2(statues) {
    let minAdditionalStatus = 0;

    statues
        .sort((a, b) => a - b)
        .forEach((statue, i) => {
            const nextStatueSize = statues[i + 1];

            if (
                typeof nextStatueSize === 'number' &&
                nextStatueSize - statue > 1
            ) {
                const statueDiff = nextStatueSize - statue;
                minAdditionalStatus += statueDiff - 1;
            }
        });

    return minAdditionalStatus;
}
