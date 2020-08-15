import User from '../models/User';

interface CreateUserDTO {
    name: string;
    inventory: string;
}

class UsersRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    public all(): User[] {
        return this.users;
    }

    public findByName(name: string): User | null {
        const findUser = this.users.find(user => name === user.name);

        return findUser || null;
    }

    public create({ name, inventory }: CreateUserDTO): User {
        const user = new User({ name, inventory });

        this.users.push(user);

        return user;
    }
}
export default UsersRepository;
