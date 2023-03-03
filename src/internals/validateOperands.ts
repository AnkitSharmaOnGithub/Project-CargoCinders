import { isNotNull } from "../features/integers/isNotNull"

export const ValidateOperands = (n1: any, n2: any): boolean => {
    return (isNotNull(n1) && isNotNull(n2));
}