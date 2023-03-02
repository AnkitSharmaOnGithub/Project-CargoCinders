import { ValidateOperands } from "../internals/validateOperands";

export const subtract = (n1: number, n2: number): number => {
    try {
        if (ValidateOperands(n1, n2)) {
            return n1 - n2;
        }

        throw new Error(`The operands are having wrong values`);
    } catch (error) {
        console.log(error);
        return 0;
    }


}