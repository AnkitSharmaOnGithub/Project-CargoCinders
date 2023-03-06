export const compact = (things: []): [] => {
    let filtered: [] = [];

    for (const el of things) {
        if (el) {
            filtered.push(el);
        }
    }
    return filtered;
}