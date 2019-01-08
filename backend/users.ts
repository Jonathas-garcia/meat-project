export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

// Tipagem {[key: string]: User}
export const users: {[key: string]: User} = {
    'juliana@gmail.com': new User('juliana@gmail.com', 'Juliana', 'juliana123'),
    'marcos@gmail.com': new User('marcos@gmail.com', 'Marcos', 'marcos123')
}
