function areFollowingPatterns(strings, patterns) {
    const map = new Map();
    for (const [i, string] of strings.entries()) {
        const item = map.get(patterns[i]);
        if (item && item !== string) return false;
        if (!item && [...map.values()].includes(string)) return false;

        map.set(patterns[i], string);
    }

    return true;
}
