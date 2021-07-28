function firstNotRepeatingCharacter(s) {
    const charMap = new Map();

    for (const char of s) {
        if (charMap.has(char)) {
            charMap.set(char, { isRepeating: true });
            continue;
        }

        charMap.set(char, { isRepeating: false });
    }

    const [nonRepeatingChar] = [...charMap].filter(
        ([_, val]) => !val.isRepeating
    );

    return nonRepeatingChar?.[0] || `_`;
}
