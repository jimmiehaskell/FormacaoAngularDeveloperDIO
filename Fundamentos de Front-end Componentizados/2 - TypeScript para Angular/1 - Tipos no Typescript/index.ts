// tipos primitivos: boolean, number, string
let ligado: boolean = true;
let numero: number = 1;
let altura: number = 1.71;
let nome: string = "Jimmie";

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// outros tipos: any, void
let qualquerCoisa1: any = 1;
let qualquerCoisa2: any = "Jimmie Haskell";
let qualquerCoisa3: any = true;

let retorno: void;

// tipo objeto

// objeto sem previsibilidade
let produtoS: object = {
    nome: "Jimmie",
    cidade: "Brasília",
    idade: 32
}

// objeto previsível
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let produto: ProdutoLoja = {
    nome: "Garrafa Termica",
    preco: 49.90,
    unidades: 100
}

// tipo array
let dados: string[] = ["Jimmie Haskell", "Laís Teodoro", "Larissa Teodoro"];
let dados2: Array<string> = ["Jimmie Haskell", "Laís Teodoro", "Larissa Teodoro"];

let infos: (string | number)[] = ["Jimmie Haskell", "Haskell", 32];
// métodos arrays
dados.pop();

// tipo tupla
let boleto: [string, number, number] = ["Água conta", 124.93, 32165498761321654987987654321654987];

// Datas
let aniversario: Date = new Date("1992-08-01 20:00");
console.log(aniversario.toString());

