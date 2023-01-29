export const reverseString = (str: string) =>
    str.split('-').reverse().join('-');

export const split = (date: any) => {
    const fixCadena = date.slice(0, 10);

    return reverseString(fixCadena);
};
