function isCryptSolution(crypt, solution) {
    const solutionMap = Object.fromEntries(solution);
    const decoded = [];

    for (const part of crypt) {
        const toDigits = [...part].map((v) => solutionMap[v]);
        if (toDigits.length > 1 && toDigits[0] === '0') return false;

        decoded.push(+toDigits.join(''));
    }

    const [num1, num2, sum] = decoded;

    return num1 + num2 === sum;
}
