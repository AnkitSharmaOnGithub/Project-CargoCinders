export const divide = (n1: number, n2: number): number | void => {
    try {
        if (n2 == 0) {
            throw new Error(`The divisor cannot be zero`);
        }

        return n1 - n2;
    }
    catch (err) {
        console.log(err);
    }
}
