// Decorators
// class decorator
function apiVersion(version: string): (targer: any) => void {
    return (targer: any) => {
        Object.assign(targer.prototype, {
            __version: `Version: ${version}`
        });
    }
}

// attribute decorator
function minLength(length: number): (target: any, key: string) => void {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => `[Getter] ${_value}`;

        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

@apiVersion('1.0')
class Api {
    @minLength(5)
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Novo produto");

// @ts-ignore
console.log(api.__version); // class decorator
console.log(api.name); // attribute decorator