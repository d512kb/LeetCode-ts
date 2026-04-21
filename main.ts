function constructRectangle(area: number): number[] {
    for (let i: number = Math.trunc(Math.sqrt(area)); i >= 2; --i) {
        if (area % i === 0) {
            return [area / i, i];
        }
    }

    return [area, 1];
};