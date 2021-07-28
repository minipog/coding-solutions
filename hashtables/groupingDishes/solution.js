function groupingDishes(dishes) {
    const dishMap = {};

    for (const [_, dish] of dishes.entries()) {
        const [dishName, ...ingredients] = dish;

        ingredients.forEach((v) => {
            if (!dishMap[v]) dishMap[v] = [];
            dishMap[v] = [...dishMap[v], dishName].sort();
        });
    }

    const groupedDishes = Object.entries(dishMap)
        .filter(([_, v]) => v.length > 1)
        .map((v) => v.flat())
        .sort(([a], [b]) => (a < b ? -1 : a === b));

    return groupedDishes;
}
