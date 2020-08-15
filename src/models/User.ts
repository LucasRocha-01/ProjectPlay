import { uuid } from 'uuidv4';

class User {
    id: string;

    name: string;

    inventory: string;

    constructor({ name, inventory }: Omit<User, 'id'>) {
        this.id = uuid();
        this.name = name;
        this.inventory = inventory;
    }
}

export default User;
