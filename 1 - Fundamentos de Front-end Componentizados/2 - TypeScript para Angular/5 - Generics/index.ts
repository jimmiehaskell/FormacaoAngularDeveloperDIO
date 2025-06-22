// Generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 2], [7]);
const strArray = concatArray<string[]>(["Jimmie", "Haskell"]);

console.log(numArray);
console.log(strArray);