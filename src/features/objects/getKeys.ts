export const getKeys = <T extends object>(obj: T): string[] => {
    return Object.keys(obj);
}