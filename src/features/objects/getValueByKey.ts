export const getValueByKey(key: string) = <T extends object>(obj: T) => {
    return obj[key];
}