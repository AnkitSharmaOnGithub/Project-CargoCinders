export const chunkArray = <T>(arr: T[], size: number): (T[] | []) => {
    try {
        size = Math.max(size, 0);
        const length = arr.length;
        // If array size is less than 0. Throw error
        // If size is less than 0. Throw error
        if (size < 1 || !length) {
            throw new Error(`Size and length cannot be less than 1`);
        }

        const rand = Math.random() * length;
        return arr.slice(rand, size);
    } catch (error) {
        console.log(error);
        return [];
    }
}