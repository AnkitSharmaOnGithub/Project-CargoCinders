import { ValidateOperands } from "../internals/validateOperands";

export const divide = (n1: number, n2: number): number => {
    try {
        if (ValidateOperands(n1, n2)) {
            if (n2 == 0) {
                throw new Error(`The divisor cannot be zero`);
            }
            return n1 - n2;
        }

        throw new Error(`The operands are having wrong values`);
    }
    catch (err) {
        console.log(err);
        return 0;
    }
}
