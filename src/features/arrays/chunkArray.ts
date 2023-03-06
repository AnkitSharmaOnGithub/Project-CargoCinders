export const chunkArray = <T>(nums: T[], size: number): (T[] | []) => {
    try {
        // If array size is less than 0. Throw error
        size = Math.max(size, 0);
        const length = nums.length;
        // If size is less than 0. Throw error
        if (size < 1 || !length) {
            throw new Error(`Size and length cannot be less than 1`);
        }

        const rand = Math.random() * length;
        return nums.slice(rand, size);
    } catch (error) {
        console.log(error);
        return [];
    }
}