export const castToArray = (...args: any[]) => {
    if (args.length > 0) {
        const returnArr = [];
        for (const el of args) {
            returnArr.push(el);
        }
        return returnArr;
    }

    return [];
}