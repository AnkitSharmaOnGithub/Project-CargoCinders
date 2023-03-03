import { ValidateOperands } from "../../internals/validateOperands";

export const addition = (n1: number, n2: number): number => {
    try {
        let isValid = ValidateOperands(n1, n2);
        if (isValid) {
            return n1 + n2
        }

        throw new Error(`The operands are having wrong values`);
    } catch (error) {
        console.log(error);
        return 0;
    }


};