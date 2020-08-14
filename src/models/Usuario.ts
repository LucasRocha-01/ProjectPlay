import { uuid } from 'uuidv4';

class Usuario {
    id: string;

    name: string;

    health: number;

    mana: number;

    inventory: string;

    constructor(name: string, health: number, mana: number, inventory: string) {
        this.id = uuid();
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.inventory = inventory;
    }
}

export default Usuario;
