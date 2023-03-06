export const getValues = <T extends object>(obj: T): string[] => {
    return Object.values(obj);
}